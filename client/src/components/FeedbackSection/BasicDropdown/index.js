import React from 'react'
import { useState } from 'react'
import DropdownInput from '../DropdownInput'



export default function BasicDropdown({title , data}) {
    const [dataSet, setDataSet] = useState(data)
    return (
       
        <div>
            <label for={title}>{title}</label>
            <select>
            {dataSet.map((item)=>{
                return <DropdownInput value = {item.value} />
            })
            }
            </select>
        </div>
    )
}
