import React from 'react'
import { useState } from 'react'
import DropdownInput from '../DropdownInput'
import './style.css'


export default function BasicDropdown({title , data, setValue}) {
    const [dataSet, setDataSet] = useState(data)
    function handleEvent(e){
        console.log("click!",e.target.value)
        setValue(e.target.value)
    }
    return (
       
        <div>
            <label for={title}>{title}</label>
            <br></br>
            <select red="theInput" className='input-box' onClick={handleEvent}>
            {dataSet.map((item)=>{
                return <DropdownInput value = {item.value} />
            })
            }
            </select>
        </div>
    )
}
