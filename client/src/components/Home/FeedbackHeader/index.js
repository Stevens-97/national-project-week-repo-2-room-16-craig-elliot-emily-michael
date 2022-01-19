import React from 'react'
import {Link} from "react-router-dom"
import './style.css'


export default function index() {
    return (
        <div className='feedbackHeader'>
           <Link to="/feedback" className='feedbacklink'>
            <h2>
                Click Here to do Your Daily Feedback
            </h2>
            </Link> 
        </div>
    )
}
