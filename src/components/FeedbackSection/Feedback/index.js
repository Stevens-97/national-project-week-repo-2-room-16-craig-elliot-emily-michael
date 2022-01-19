import React from 'react'

export default function Feedback({text}) {
    return (
        <div>
            <label>{text}</label>
            <br></br>
            <textarea className='input-box'></textarea>
        </div>
    )
}
