import React, { useEffect } from 'react'

export default function Submit({postData}) {
        // Sending off the data to database
        async function sendPostData(postData){
            const res = await fetch("https://room16-project.herokuapp.com/users/",{
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
            'Content-type': 'application/json; charset=UTF-8'
            }})
            const data = await res.json()
            console.log(data)
        }
        
        function handleSubmit(e){
            e.preventDefault()
            console.log("handle submit working, here is the post data",postData )
            sendPostData()
        }
    
    return (
        <div>
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}
