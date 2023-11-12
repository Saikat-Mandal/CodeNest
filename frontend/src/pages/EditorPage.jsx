import React, { useState } from 'react'
import UserIcon from '../components/UserIcon'
import Button from "../components/Button"
import MainEditor from './MainEditor'
function EditorPage() {

  const [ clients ,setClients] = useState([
    {socketId : 1, username : "Saikat" },
    {socketId : 2, username : "Akshay" },
    {socketId : 3, username : "vitamin" },
    {socketId : 4, username : "lodu" },
    {socketId : 5, username : "rishav" },
  ])


  return (
    <div className=' flex justify-between'>
        <div className=' flex  flex-col justify-between  bg-slate-700 py-6 px-10'>
            <div>
            <h1 className='text-white tracking-widest text-2xl'>LOGO</h1>
            <p className=' text-white py-3'>connected</p>
            </div>
            <div className=' grid grid-cols-2 gap-6'>
              {
                clients.map((user)=>{
                  return <UserIcon key={clients.socketId} name={user.username}  />
                })
              }
          
            </div>
            
                <Button text="copy room id"/>
                <Button text="leave"/>
      
         
        </div>

        <div className="right bg-slate-400 w-full">
          <MainEditor/>
        </div>
    </div>
  )
}

export default EditorPage