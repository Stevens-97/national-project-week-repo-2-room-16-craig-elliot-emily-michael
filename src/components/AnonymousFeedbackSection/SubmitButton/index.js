import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { REACT_APP_herokuURLPath } from "../../../config";

export default function SubmitButton({ postData, link }) {
  // Sending off the data to database
  async function sendPostData(postData) {
    console.log("POST DATA HERE", postData);
    const res = await fetch(`${REACT_APP_herokuURLPath}/AnonymousFeedback/`, {
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
      <button className="submit-buttons" type="submit" onClick={handleSubmit}>
        <Link to={link} className="feedbacklink">
          {" "}
          Submit
        </Link>
      </button>
    </div>
  );
}
