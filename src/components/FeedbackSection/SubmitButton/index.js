import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Submit({ postData, link}) {
   // Sending off the data to database
   async function sendPostData(postData) {
      console.log("POST DATA HERE", postData);
      const res = await fetch("https://room16-project.herokuapp.com/users/", {
         method: "POST",
         body: JSON.stringify(postData),
         headers: {
            "Content-type": "application/json; charset=UTF-8",
         },
      });
      const data = await res.json();
      console.log(data);
   }

   function handleSubmit(e) {
      e.preventDefault();
      console.log("handle submit working, here is the post data", postData);
      sendPostData(postData);
   }

   return (
      <div>
         
            <button className='submit-buttons' type="submit" onClick={handleSubmit}>
            <Link to={link} className='feedbacklink'> Submit</Link>
            </button>
         
      </div>
   );
}
