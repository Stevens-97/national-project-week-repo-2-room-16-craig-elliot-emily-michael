import React from 'react'
import FeedbackHeader from './FeedbackHeader/index.js'
import ReactHelp from './ReactHelp/index.js'

export default function HomeIndex() {
    return (
        <div>
           <FeedbackHeader />
           <ReactHelp title='React' 
           url1='https://www.youtube.com/watch?v=O6P86uwfdR0' sub1={'UseState'} 
           url2='https://www.youtube.com/watch?v=0ZJgIjIuY7U' sub2={'UseEffect'} 
           url3='https://www.youtube.com/watch?v=3e1GHCA3GP0' sub3={'React Testing'}/>
           <ReactHelp title='Node.js' 
           url1={'https://www.youtube.com/watch?v=ENrzD9HAZK4'} sub1={'Basics'}
           url2={'https://www.youtube.com/watch?v=JlgKybraoy4'} sub2={'Express Basics'}
           url3={'https://www.youtube.com/watch?v=kV6MJ9W4whM'} sub3={'Nodemon'}
           />
           <ReactHelp title='Git' 
           url1={'https://www.youtube.com/watch?v=USjZcfj8yxE'} sub1={'Basics'}
           url2={'https://www.youtube.com/watch?v=JTE2Fn_sCZs'} sub2={'Branching'}
           url3={'https://www.youtube.com/watch?v=0iuqXh0oojo'} sub3={'Merge'}
           />
           <ReactHelp title='Stressed?' 
           url1={'https://www.afiniti.com/corporate/rock-paper-scissors'} sub1={'Suprise 1'}
           url2={'https://www.youtube.com/watch?v=SB-qEYVdvXA'} sub2={'Suprise 2'}
           url3={'https://www.youtube.com/watch?v=xWRHTpqQMGM'} sub3={'Suprise 3'}
           />
            

        </div>
    )
}
