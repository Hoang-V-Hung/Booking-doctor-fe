import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/* left */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt='' />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Chúng tôi cam kết mang đến dịch vụ chăm sóc sức khỏe tốt nhất, giúp bạn và gia đình luôn khỏe mạnh và hạnh phúc.</p>
                </div>

                {/* center */}
                <div>
                    <p className='text-xl font-medium mb-5'>CÔNG TY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Trang chủ</li>
                        <li>Về chúng tôi</li>
                        <li>Liên hệ</li>
                        <li>Chính sách bảo mật</li>
                    </ul>
                </div>

                {/* right */}
                <div>
                    <p className='text-xl font-medium mb-5'>Liên hệ</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>024 375 40103</li>
                        <li>ctsv@ptit.edu.vn</li>
                    </ul>
                </div>
            </div>

            {/* -----copytext */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>© Copyright 2024 HocVienCongNgheBuuChinhVienThong, All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer