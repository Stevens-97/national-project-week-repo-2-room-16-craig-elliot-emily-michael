import React, {useState} from 'react'
import DropdownInput from '../DropdownInput'

const bootcamperData = [
    {value: "Elliott"},
    {value: "Emily"},
    {value: "Michael"},
    {value: "Craig"}
]
const bootcampData =[
    {value: 8},
    {value: 9},
    {value: 10},
    {value:11} 
]

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
