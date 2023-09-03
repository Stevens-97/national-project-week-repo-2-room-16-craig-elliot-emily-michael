import React, { useState } from "react";
import Feedback from "../Feedback";
import SubmitButton from "../SubmitButton";
import Title from "../Title";
import TimeInput from "../TimeInput";
import { anonData } from "../../libs/questionData";

import styles from "./AnonymousFeedbackSection.module.css";

export default function AnonymousFeedbackSection() {
    const [answer, setAnswer] = useState({});

    const [answerRequired, setAnswerRequired] = useState(false);

    const { feedbackSection } = styles;

    return (
        <div className={feedbackSection}>
            <Title text={"Thanks For Giving Your Feedback!"} />
            <TimeInput
                setValue={setAnswer}
                value={answer}
                title={anonData[0]?.title}
                index={anonData[0]?.index}
                setAnswerRequired={setAnswerRequired}
            />
            <br></br>
            <Feedback
                setValue={setAnswer}
                value={answer}
                title={anonData[1]?.title}
                index={anonData[1]?.index}
            />
            <SubmitButton
                postData={answer}
                link={"/"}
                disabled={answerRequired}
            />
        </div>
    );
}
