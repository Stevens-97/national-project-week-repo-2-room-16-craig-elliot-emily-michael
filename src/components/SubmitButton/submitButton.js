import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Submit({ postData, link }) {
  // Sending off the data to database
  async function sendPostData(postData) {
    // const res = await fetch(`${REACT_APP_herokuURLPath}/users/`, {
    //   method: "POST",
    //   body: JSON.stringify(postData),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // });
    // const data = await res.json();
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendPostData(postData);
  }

  return (
    <div>
      <button className="submit-buttons" type="submit" onClick={handleSubmit}>
        <Link to={link} className="feedbacklink">
          Submit
        </Link>
      </button>
    </div>
  );
}
