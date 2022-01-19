import React from 'react'
import { useState } from 'react'
import Title from './Title/index.js'
//import Dropdown from './Dropdown/index.js'
import TimeInput from './TimeInput/index.js'
import Feedback from './Feedback/index.js'
import "./FeedbackSection.css"
import Rating from './Rating/index.js'
import { bootcampData, bootcamperData } from '../../libs/data.js'
import BasicDropdown from './BasicDropdown/index.js'
import Submit from './SubmitButton/index.js'

export default function FeedbackIndex() {

    const [bootcampers, setBootcampers] = useState(bootcamperData)
    const [bootcamps, setBootcamps] = useState(bootcampData)

    return (
        <div className='feedback-section'>
           <Title text={'Feedback For The Day'}/>  
           <BasicDropdown title={'Name'} data={bootcampers}/>
           <BasicDropdown title={'Cohort'} data={bootcamps}/>
           <TimeInput />
           <Feedback text={'Daily Feedback'}/>
           <Rating title={'Workshops / Lectures'}/>
           <Rating title={'Guest Lectures'}/>
           <Rating title={'Mood'}/>
           <BasicDropdown title={'Bootcamper of The Week'} data={bootcampers}/>
           <Submit />
        </div>
    )
}
//<Dropdown />
