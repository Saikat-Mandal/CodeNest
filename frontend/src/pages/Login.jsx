import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    // console.log(email, password);
    const onLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:4000/auth/login", {
                email: email,
                password: password
            }, { withCredentials: true })
            alert(response.data.message)
            localStorage.setItem("userId", response.data.id)
            console.log(response);
            navigate("/")
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className=' bg-black w-full h-screen'>
            <div className=' h-full w-full'>
                <Navbar />
                <div className=' flex justify-center text-white'>

                    <form className=' flex flex-col w-2/6 gap-6'>
                        <p className=' text-white text-center text-2xl my-4'>Login here</p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} name="roomId" className='text-black p-4 rounded-md' type="text" placeholder='Email' />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} name="username" className='text-black p-4 rounded-md' type="text" placeholder='Password' />
                        <span onClick={onLogin}><Button text="Submit" color="teal-400" textColor="black" /></span>
                        <p className='text-center'>Don't have an account yet ? <Link to="/register" className='hover:underline hover:text-teal-400'>Create one here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login