import React, {useState} from 'react'
import DropdownInput from '../DropdownInput'

const bootcamperData = [
    {name: "Elliott"},
    {name: "Emily"}
]
const bootcampData =[8,9,10,11]

export default function Dropdown({title , name}) {
    const [bootcampers, setBootcampers] = useState(bootcamperData)
    const [bootcamps, setBootcamps] = useState(bootcampData)
    

    return (
        <div>
            <label for="Name">Name</label>
            <select>
            {bootcampers.map((bootcamper)=>{
                return <DropdownInput value = {bootcamper.name} />
            })
            }
            </select>
            <label for="Cohort">Cohort</label>
            <select>
            {bootcamps.map((bootcamp)=>{
                return <DropdownInput value = {bootcamp} />
            })}
            </select>
        </div>
    )
}
