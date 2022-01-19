import React from 'react'
import {Link} from "react-router-dom"
import './style.css'

export default function Header() {
    return (
        <div className='header'>
        <Link to="/">
            <h1>
                School of Code Bootcamper Portal
            </h1>
            </Link>
        </div>
    )
}
