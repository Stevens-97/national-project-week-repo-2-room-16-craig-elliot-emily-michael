import React from 'react'
import { useState } from 'react'
import DropdownInput from '../DropdownInput'
import './style.css'


export default function BasicDropdown({title , data}) {
    const [dataSet, setDataSet] = useState(data)
    return (
       
        <div>
            <label for={title}>{title}</label>
            <br></br>
            <select className='input-box'>
            {dataSet.map((item)=>{
                return <DropdownInput value = {item.value} />
            })
            }
            </select>
        </div>
    )
}
