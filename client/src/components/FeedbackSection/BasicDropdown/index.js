import React from 'react'
import DropdownInput from '../DropdownInput'



export default function index({data}) {
    return (
       
        <div>
            <label for="Name">Name</label>
            <select>
            {{data}.map((item)=>{
                return <DropdownInput value = {item.value} />
            })
            }
            </select>
        </div>
    )
}