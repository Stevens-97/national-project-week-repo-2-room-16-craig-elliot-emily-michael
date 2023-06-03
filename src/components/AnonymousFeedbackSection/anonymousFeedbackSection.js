import React, { useEffect, useState } from "react";
import Feedback from "../Feedback";
import SubmitButton from "./SubmitButton/index.js";
import Title from "../Title";
import TimeInput from "../TimeInput";
import { emptyAnonFeedback } from "../../libs/data.js";
export default function AnonymousFeedbackSection() {
  const [data, setData] = useState(emptyAnonFeedback);
  const [time, setTime] = useState("");
  const [givenFeedback, setGivenFeedback] = useState("");

  useEffect(() => {
    function compileData() {
      setData({ ...data, date: time, feedback: givenFeedback });
    }
    compileData();
  }, [time, givenFeedback]);

  return (
    <div className="feedback-section">
      <Title text={"Thanks For Giving Your Feedback!"} />
      <TimeInput setValue={setTime} />
      <Feedback
        setValue={setGivenFeedback}
        text={"Anything else? This is anonymous."}
      />
      <SubmitButton postData={data} link={"/"} />
    </div>
  );
}
