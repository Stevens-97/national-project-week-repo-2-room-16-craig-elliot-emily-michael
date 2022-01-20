import React, { useEffect } from "react";
import { useState } from "react";
import Title from "./Title/index.js";
//import Dropdown from './Dropdown/index.js'
import TimeInput from "./TimeInput/index.js";
import Feedback from "./Feedback/index.js";
import "./FeedbackSection.css";
import Rating from "./Rating/index.js";
import {
   bootcampData,
   bootcamperData,
   emptyFeedback,
} from "../../libs/data.js";
import BasicDropdown from "./BasicDropdown/index.js";
import Submit from "./SubmitButton/index.js";

export default function FeedbackIndex() {
   const [bootcampers, setBootcampers] = useState(bootcamperData);
   const [bootcamps, setBootcamps] = useState(bootcampData);
   // Form collection
   const [feedbackInput, setFeedbackInput] = useState("");
   const [bootcamper, setBootcamper] = useState("");
   const [bootcamp, setBootcamp] = useState("");
   const [todaysDate, setTodaysDate] = useState("");
   const [workShopLectures, setWorkShopLectures] = useState("");
   const [guestRating, setGuestRating] = useState("");
   const [moodRating, setMoodRating] = useState("");
   const [BoTW, setBoTW] = useState("");
   // Form Data pooling
   const [postData, setPostData] = useState(emptyFeedback);

   useEffect(() => {
      function updatePostData() {
         setPostData({
            ...postData,
            name: bootcamper,
            chort: bootcamp,
            date: todaysDate,
            dailyFeedBack: feedbackInput,
            workShopRating: workShopLectures,
            guestLectureRating: guestRating,
            userFeelingRating: moodRating,
            bootcamperOfTheWeek: BoTW,
         });
         console.log(postData);
      }
      updatePostData();
   }, [
      feedbackInput,
      bootcamper,
      bootcamp,
      todaysDate,
      workShopLectures,
      guestRating,
      moodRating,
      BoTW,
   ]);

   return (
      <div className="feedback-section">
         <Title text={"Feedback For The Day"} />
         <BasicDropdown
            setValue={setBootcamper}
            title={"Name"}
            data={bootcampers}
            className='first-inputs'
         />
         <BasicDropdown
            setValue={setBootcamp}
            title={"Cohort"}
            data={bootcamps}
            className='first-inputs'
         />
         <TimeInput setValue={setTodaysDate} 
            className='first-inputs'
         />
         <Feedback setValue={setFeedbackInput} text={"Daily Feedback"} />
         <Rating
            setValue={setWorkShopLectures}
            title={"Workshops / Lectures"}
         />
         <Rating setValue={setGuestRating} title={"Guest Lectures"} />
         <Rating setValue={setMoodRating} title={"Mood"} />
         <BasicDropdown
            setValue={setBoTW}
            title={"Bootcamper of The Week"}
            data={bootcampers}
         />
         <Submit link={"/AnonymousFB"} postData={postData} />
      </div>
   );
}
//<Dropdown />
