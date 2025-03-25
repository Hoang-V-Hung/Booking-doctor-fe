import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <div>

            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>Liên hệ với <span className='text-gray-700 font-semibold'>Chúng tôi</span></p>
            </div>

            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 md-28 text-sm'>

                <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt='' />

                <div className='flex flex-col justify-normal items-start gap-6'>
                    <p className='font-semibold text-lg text-gray-600'>Văn phòng </p>
                    <p className='text-gray-500'>122 Hoàng Quốc Việt, Q. Cầu Giấy, Hà Nội<br />11 Nguyễn Đình Chiểu, P. Đa Kao, Q.1 TP Hồ Chí Minh</p>
                    <p className='text-gray-500'><p className='font-semibold text-lg text-gray-600'>Phương thức liên lạc</p>Số điện thoại liên hệ: 024 3756 2186<br />Email: ctsv@ptit.edu.vn</p>
                    <p className='font-semibold text-lg text-gray-600'>Đăng kí tham gia</p>
                    <p className='text-gray-500'>Tìm hiểu thêm về các nhóm và việc làm của chúng tôi.</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Ứng tuyển công việc</button>
                </div>

            </div>

        </div>
    )
}

export default Contact