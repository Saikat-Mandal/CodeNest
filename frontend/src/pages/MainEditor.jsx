import React, { useEffect } from 'react'
import Codemirror from "codemirror"
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'

function MainEditor() {

  return (
    <textarea id="realtimeEditor">

    </textarea>
  )
}

export default MainEditor