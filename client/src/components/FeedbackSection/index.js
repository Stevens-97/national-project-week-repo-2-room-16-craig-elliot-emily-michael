import React from 'react'
import Title from './Title/index.js'
import Dropdown from './Dropdown/index.js'
import TimeInput from './TimeInput/index.js'
import Feedback from './Feedback/index.js'
import "./FeedbackSection.css"
import Rating from './Rating/index.js'

export default function FeedbackIndex() {
    return (
        <div className='feedback-section'>
           <Title text={'Feedback For The Day'}/>  
           <Dropdown />
           <TimeInput />
           <Feedback />
           <Rating title={'Workshops / Lectures'}/>
           <Rating title={'Guest Lectures'}/>
           <Rating title={'Mood'}/>
        </div>
    )
}
