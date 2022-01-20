import React from 'react';
import './style.css'

export default function ReactHelp({title, url1, url2, url3, sub1, sub2, sub3}) {
  return <div className='help-box'>
    <h3>{title}</h3>
    <div>
        <div className='links'>
        <a href={url1} target="_blank">  {sub1}</a>
           </div>
           <div className='links'>
        <a href={url2} target="_blank">  {sub2}</a>
           </div>
           <div className='links'> 
        <a href={url3} target="_blank">  {sub3}</a>
           </div>
    </div>
  </div>;
}
