import React, { useEffect } from "react";
import { useState } from "react";
import Title from "../Title";
//import Dropdown from './Dropdown/index.js'
import TimeInput from "../TimeInput";
import Feedback from "../Feedback/";
import Rating from "../Rating";
import {
  bootcampData,
  bootcamperData,
  emptyFeedback,
} from "../../libs/data.js";
import BasicDropdown from "../BasicDropdown";
import Submit from "../SubmitButton";

import styles from "./FeedbackSection.module.css";

export default function FeedbackIndex() {
  const { feedbackSection, input } = styles;

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

  // useEffect(() => {
  //   function updatePostData() {
  //     setPostData({
  //       ...postData,
  //       name: bootcamper,
  //       chort: bootcamp,
  //       date: todaysDate,
  //       dailyFeedBack: feedbackInput,
  //       workShopRating: workShopLectures,
  //       guestLectureRating: guestRating,
  //       userFeelingRating: moodRating,
  //       bootcamperOfTheWeek: BoTW,
  //     });
  //   }
  //   updatePostData();
  // }, [
  //   feedbackInput,
  //   bootcamper,
  //   bootcamp,
  //   todaysDate,
  //   workShopLectures,
  //   guestRating,
  //   moodRating,
  //   BoTW,
  // ]);

  return (
    <div className={feedbackSection}>
      <Title text={"Feedback For The Day"} />
      <BasicDropdown
        setValue={setBootcamper}
        title={"Name"}
        data={bootcampers}
        className={input}
      />
      <BasicDropdown
        setValue={setBootcamp}
        title={"Cohort"}
        data={bootcamps}
        className={input}
      />
      <TimeInput setValue={setTodaysDate} className="first-inputs" />
      <Feedback setValue={setFeedbackInput} text={"Daily Feedback"} />
      <Rating setValue={setWorkShopLectures} title={"Workshops / Lectures"} />
      <Rating setValue={setGuestRating} title={"Guest Lectures"} />
      <Rating setValue={setMoodRating} title={"Mood"} />
      <BasicDropdown
        setValue={setBoTW}
        title={"Bootcamper of The Week"}
        data={bootcampers}
      />
      <Submit link={"/anonymous-feed-back"} postData={postData} />
    </div>
  );
}
