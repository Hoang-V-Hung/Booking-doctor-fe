import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const { backendUrl, token, setToken } = useContext(AppContext)
    const navigate = useNavigate()

    const [state, setState] = useState('Đăng kí')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {

            if (state === 'Đăng kí') {

                const { data } = await axios.post(backendUrl + '/api/user/register', { name, password, email })
                if (data.success) {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                } else {
                    toast.error(data.message)
                }

            } else {

                const { data } = await axios.post(backendUrl + '/api/user/login', { password, email })
                if (data.success) {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                } else {
                    toast.error(data.message)
                }

            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
                <p className='text-2xl font-semibold'>{state === 'Đăng kí' ? 'Tạo tài khoản' : 'Đăng nhập'}</p>
                <p>Vui lòng {state === 'Đăng kí' ? 'đăng kí' : 'đăng nhập'} để đặt lịch</p>
                {
                    state === 'Đăng kí' && <div className='w-full'>
                        <p>Tên</p>
                        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e) => setName(e.target.value)} value={name} required />
                    </div>
                }

                <div className='w-full'>
                    <p>Email</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='email' onChange={(e) => setEmail(e.target.value)} value={email} required />
                </div>
                <div className='w-full'>
                    <p>Mật khẩu</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='password' onChange={(e) => setPassword(e.target.value)} value={password} required />
                </div>
                <button type='submit' className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Đăng kí' ? 'Tạo tài khoản' : 'Đăng nhập'}</button>
                {
                    state === 'Đăng kí'
                        ? <p>Đã có tài khoản? <span onClick={() => setState('Đăng nhập')} className='text-primary underline cursor-pointer'>Đăng nhập tại đây</span></p>
                        : <p>Tạo tài khoản mới? <span onClick={() => setState('Đăng kí')} className='text-primary underline cursor-pointer'>ấn vào đây</span></p>
                }
            </div>
        </form>



    )
}

export default Login