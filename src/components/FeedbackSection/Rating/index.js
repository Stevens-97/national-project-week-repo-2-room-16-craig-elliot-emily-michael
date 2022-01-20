import React from 'react'

export default function Rating({title, setValue}) {
    function handleEvent(e){
        console.log("click!",e.target.value)
        setValue(Number(e.target.value))
    }
    return (
        <div className='input-box ratings'>
        <form>
            <p>{title}</p>
            <div className='rating-inputs'>
            <input onChange={handleEvent} type="radio" id='1' name={title} value="1" />
            <input onChange={handleEvent} type="radio" id="2" name={title} value="2" />
            <input onChange={handleEvent} type="radio" id="3" name={title} value="3" />
            <input onChange={handleEvent} type="radio" id="4" name={title} value="4" />
            <input onChange={handleEvent} type="radio" id="5" name={title} value="5" />
            
            </div>
            <div className='rating-emojis'>
                <label for="1">🙃</label>
                <label for="5">🙂</label>
            </div>
            </form>
        </div>
    )
}
