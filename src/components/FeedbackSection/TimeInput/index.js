import React from 'react'

export default function TimeInput({setValue}) {
    function handleEvent(e){
        console.log("click!",e.target.value)
        setValue(e.target.value)
    }
    return (
        <div>
            <label>Date</label>
            <br></br>
            <input onChange={handleEvent} className='input-box' type="date" ></input>
        </div>
    )
}
