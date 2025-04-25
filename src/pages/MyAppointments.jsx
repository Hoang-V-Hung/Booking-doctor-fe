import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const MyAppointments = () => {

  const { backendUrl, token, getDoctorsData } = useContext(AppContext)

  const [appointments, setAppointments] = useState([])

  const months = ['', 'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('-')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  const navigate = useNavigate();

  const getUserAppointments = async () => {
    try {

      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })

      if (data.success) {
        setAppointments(data.appointments.reverse())
        console.log(data.appointments);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {

    try {

      const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }

  }

  const handlePayment = async (appointmentId) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/create-momo-payment`, { appointmentId }, {
        headers: { token }
      });

      if (data.success) {
        toast.success("Đang chuyển đến MoMo...");
        setTimeout(() => {
          window.location.href = data.payUrl;
        }, 1000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Thanh toán thất bại");
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }

    const params = new URLSearchParams(window.location.search);
    const resultCode = params.get('resultCode');
    const extraDataEncoded = params.get('extraData');

    let appointmentId = null;

    if (extraDataEncoded) {
      try {
        const decoded = JSON.parse(atob(extraDataEncoded));
        appointmentId = decoded.appointmentId;
      } catch (err) {
        console.error("Không đọc được appointmentId từ extraData:", err);
      }
    }

    if (resultCode === '0' && appointmentId) {
      toast.success('Thanh toán thành công ');

      const updatePayment = async () => {
        try {
          await axios.post(`${backendUrl}/api/user/update-payment-status`, { appointmentId }, {
            headers: { token }
          });
          getUserAppointments();
          navigate('/my-appointments', { replace: true });
        } catch (error) {
          toast.error('Cập nhật trạng thái thất bại');
        }
      };
      updatePayment();
    } else if (resultCode && resultCode !== '0') {
      toast.error('Thanh toán thất bại ');
      navigate('/my-appointments', { replace: true });
    }
  }, [token]);

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>Lịch hẹn của tôi</p>
      <div>
        {appointments.map((item, index) => (
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-indigo-50' src={item.docData.image} alt='' />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.docData.name}</p>
              <p>{item.docData.speciality}</p>
              <p className='text-zinc-700 font-medium mt-1'>Địa chỉ: </p>
              <p className='text-xs'>{item.docData.address.line1}</p>
              <p className='text-xs'>{item.docData.address.line2}</p>
              <p className='text-sm mt-1'><span className='text-xs text-neutral-700 font-medium'>Ngày giờ: </span>{slotDateFormat(item.slotDate)} | {item.slotTime}</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-end'>
              {!item.cancelled && item.payment && !item.isCompleted && <button className='sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-50'>Đã thanh toán</button>}
              {!item.cancelled && !item.payment && !item.isCompleted && <button onClick={() => handlePayment(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300'>Thanh toán ngay</button>}
              {!item.cancelled && !item.payment && !item.isCompleted && <button onClick={() => cancelAppointment(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300'>Huỷ đặt lịch</button>}
              {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Đã huỷ đặt lịch</button>}
              {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Đã được hẹn</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
