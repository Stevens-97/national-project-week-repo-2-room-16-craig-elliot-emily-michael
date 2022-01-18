import React from 'react'



export default function Dropdown({title , name}) {
    return (
        <div>
            <label for={title}>{title}</label>
            <select id={title} name={title}>
            <option value={name}>{name}</option>
            <option value={name}>{name}</option>
            <option value={name}>{name}</option>
            <option value={name}>{name}</option>
</select>
        </div>
    )
}
