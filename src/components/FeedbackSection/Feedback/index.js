import React from 'react'

export default function Feedback({text, setValue}) {
    function handleEvent(e){
        console.log("click!",e.target.value)
        setValue(e.target.value)
    }
    return (
        <div>
            <label>{text}</label>
            <br></br>
            <textarea onChange={handleEvent} className='input-box'></textarea>
        </div>
    )
}
