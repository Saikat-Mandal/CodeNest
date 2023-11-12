import React from 'react'

function Editor() {
    return (
        <div className=' flex h-screen w-full'>
            <div className='h-full w-1/6 bg-black text-white f'>
                <p className=' text-3xl text-center py-5'>Attendees</p>
                <div className=' p-6'>
                    <div className=' h-14 w-14 border border-gray-300 flex justify-center items-center rounded-lg'>
                        Saikat
                    </div>
                </div>
            </div>
            <div className=' flex flex-col h-full w-5/6'>
                {/* code editor  */}
                <div>
                </div>
                <div className=' h-4/6'>
                    <textarea className=' outline-none h-full p-4 w-full' name="" id="" cols="30" rows="10">

                    </textarea>
                </div>

                {/* terminal  */}
                <div className=' bg-red-200 h-2/6 '>

                </div>
            </div>
        </div>
    )
}

export default Editor