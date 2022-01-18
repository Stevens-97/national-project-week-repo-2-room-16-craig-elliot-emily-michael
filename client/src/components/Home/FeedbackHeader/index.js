import React from 'react'
import {Link} from "react-router-dom"


export default function index() {
    return (
        <div>
           <Link to="/feedback">
            <h2>
                Click Here to do Your Daily Feedback
            </h2>
            </Link> 
        </div>
    )
}
