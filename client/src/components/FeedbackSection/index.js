import React from 'react'
import Title from './Title/index.js'
import Dropdown from './Dropdown/index.js'

export default function FeedbackIndex() {
    return (
        <div>
           <Title text={'Feedback For The Day'}/>  
           <Dropdown />
        </div>
    )
}
