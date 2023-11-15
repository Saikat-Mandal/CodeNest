import React, { useEffect, useRef, useState } from 'react'

import Editor from '@monaco-editor/react';
import { initSocket } from '../socket';
import Actions from '../actions';


function EditorPage() {

    // get the value from editor 
    const [editorValue, setEditorValue] = useState("")
    const handleEditorChange = (value, event) => {
        setEditorValue(value)
    }

    // value from options state 
    const [selectValue, setSelectValue] = useState("Python")

    // files array 
    const files = {
        "script.py": {
            name: "script.py",
            language: "python",
            value: "Here is some python text"
        },
        "index.html": {
            name: "index.html",
            language: "html",
            value: "Here is some html text"
        }

    }

    // file state 
    const [filename, setFileName] = useState("script.py")
    const file = files[filename]
    // console.log(filename);


    // socket 
    const socketRef = useRef(null)

    useEffect(() => {
        const init = async () => {
            socketRef.current = await initSocket()
            socketRef.current.emit(Actions.JOIN)
        }
        init()
    }, [])


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
                <div className=' h-4/6'>
                    <Editor
                        onChange={handleEditorChange}
                        theme="vs-dark"
                        height="100%"
                        width="100%"
                        defaultLanguage={file.language}
                        path={file.name}
                        defaultValue={file.path}
                    />
                </div>

                {/* terminal  */}
                <div className=' flex h-2/6'>
                    <div className=' bg-slate-700 p-2 w-4/6 '>
                        <div className=' p-2 border border-white border-dashed h-full'>

                        </div>
                    </div>
                    <div className='p-2 w-2/6 bg-black t'>
                        {/* <button onClick={onChangeLanguage} className='bg-teal-400 text-black py-2 px-3 rounded-md'>Change</button> */}
                        <select name="" id="" onChange={(e) => setSelectValue(e.target.value)}>
                            <option value="python">Python</option>
                            <option value="html">Html</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorPage