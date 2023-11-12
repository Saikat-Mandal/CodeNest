import React, { useState } from 'react'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import {v4 as uuid} from "uuid"
function Join() {
        const[username , setUsername] = useState("")
        const[roomId , setRoomId] = useState("")


    const navigate = useNavigate()
    const handlesubmit = (e) =>{
        if(!roomId || !username){
            console.log("fill all details");
            return
        }
        navigate(`/join/${roomId}` ,
            username
        )
    }

    const createRoomId = (e) =>{
        e.preventDefault()
        const id = uuid()
        setRoomId(id)
    }

    const handleInputEnter = (e) =>{
        if(e.code === 'Enter'){
            handlesubmit()
        }
    }
    
  return (
    <div className=' flex justify-center items-center min-h-screen' style={{background:"#0F0E0E"}}>
       <form action="" className='flex flex-col'>
       <p className=' text-white text-center text-2xl my-4'>Paste invitation room ID</p>
        <input onKeyUp={handleInputEnter} value={roomId} name="roomId" onChange={(e)=>setRoomId(e.target.value)} className=' p-4 m-2 rounded-md' type="text" placeholder='ROOM ID' />
        <input onKeyUp={handleInputEnter} value={username} name="username" onChange={(e)=>setUsername(e.target.value)} className=' p-4 m-2 rounded-md' type="text" placeholder='USERNAME' />
        <Button text="Join" onClick={handlesubmit} />
       <p className=' text-white text-center my-4'>if you don't have an invite then create <Link onClick={createRoomId} className=' text-blue-400 underline'>new room</Link></p>
       </form>
    </div>
  )
}

export default Join