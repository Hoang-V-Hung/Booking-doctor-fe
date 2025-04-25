import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)


  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Duyệt qua các bác sĩ chuyên khoa.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Tim mạch' ? navigate('/doctors') : navigate('/doctors/Tim mạch')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Tim mạch" ? "bg-indigo-100 text-black" : ""}`}>Tim mạch</p>
          <p onClick={() => speciality === 'Sản khoa' ? navigate('/doctors') : navigate('/doctors/Sản khoa')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Sản khoa" ? "bg-indigo-100 text-black" : ""}`}>Sản khoa</p>
          <p onClick={() => speciality === 'Ung bướu' ? navigate('/doctors') : navigate('/doctors/Ung bướu')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Ung bướu" ? "bg-indigo-100 text-black" : ""}`}>Ung bướu</p>
          <p onClick={() => speciality === 'Răng hàm mặt' ? navigate('/doctors') : navigate('/doctors/Răng hàm mặt')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Răng hàm mặt" ? "bg-indigo-100 text-black" : ""}`}>Răng hàm mặt</p>
          <p onClick={() => speciality === 'Chẩn đoán hình ảnh' ? navigate('/doctors') : navigate('/doctors/Chẩn đoán hình ảnh')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Chẩn đoán hình ảnh" ? "bg-indigo-100 text-black" : ""}`}>Chẩn đoán hình ảnh</p>
          <p onClick={() => speciality === 'Xét nghiệm' ? navigate('/doctors') : navigate('/doctors/Xét nghiệm')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Xét nghiệm" ? "bg-indigo-100 text-black" : ""}`}>Xét nghiệm</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className=' bg-blue-50 w-full' src={item.image} alt='' />
                <div className='p-4'>
                  <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
                    <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'}  rounded-full`}></p><p>{item.available ? 'Hoạt động' : 'Không hoạt động'} </p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors