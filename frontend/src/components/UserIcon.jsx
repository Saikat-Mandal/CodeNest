import React from 'react'

function UserIcon(props) {
  return (
    <div className=' h-14 w-14 flex items-center justify-center border-white border-2 rounded-md'>
        <p className=' text-xs text-white'>{props.name}</p>
    </div>
  )
}

UserIcon.defaultProps={
    name : "Saikat"
}

export default UserIcon