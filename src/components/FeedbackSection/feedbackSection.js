import React, { useEffect } from "react";
import { useState } from "react";
import TimeInput from "../TimeInput";
import Feedback from "../Feedback/";
import Rating from "../Rating";
import BasicDropdown from "../BasicDropdown";
import Submit from "../SubmitButton";
import { data } from "../../libs/questionData";
import styles from "./FeedbackSection.module.css";

export default function FeedbackIndex() {
    const {
        feedbackSection,
        button,
        buttonContainer,
        questionBox,
        navigationButtons,
    } = styles;

    const [answer, setAnswer] = useState({});

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answerRequired, setAnswerRequired] = useState(false);

    const handlePreviousClick = () => {
        setCurrentQuestionIndex(Math.max(currentQuestionIndex - 1, 0));
    };

    const handleNextClick = () => {
        setCurrentQuestionIndex(
            Math.min(currentQuestionIndex + 1, data.length - 1)
        );
    };

    let currentQuestion;

    switch (data[currentQuestionIndex].type) {
        case "dropdown":
            currentQuestion = (
                <BasicDropdown
                    setValue={setAnswer}
                    title={data[currentQuestionIndex]?.title}
                    data={data[currentQuestionIndex]?.dropdown}
                    index={data[currentQuestionIndex]?.index}
                    value={answer}
                />
            );
            break;
        case "timeInput":
            currentQuestion = (
                <TimeInput
                    setValue={setAnswer}
                    value={answer}
                    title={data[currentQuestionIndex].title}
                    index={data[currentQuestionIndex]?.index}
                    setAnswerRequired={setAnswerRequired}
                />
            );
            break;
        case "input":
            currentQuestion = (
                <Feedback
                    setValue={setAnswer}
                    value={answer}
                    index={data[currentQuestionIndex]?.index}
                    title={data[currentQuestionIndex].title}
                />
            );
            break;
        case "rating":
            currentQuestion = (
                <Rating
                    setValue={setAnswer}
                    value={answer}
                    index={data[currentQuestionIndex]?.index}
                    title={data[currentQuestionIndex].title}
                />
            );
            break;
        default:
            currentQuestion = null;
            break;
    }

    const isNextButtonDisabled =
        currentQuestionIndex === data.length - 1 ||
        (answerRequired && data?.[currentQuestionIndex].type === "timeInput");

    return (
        <div className={feedbackSection}>
            <div className={questionBox}>
                <h3>{currentQuestion}</h3>
            </div>
            <div className={buttonContainer}>
                <div className={navigationButtons}>
                    <button
                        onClick={handlePreviousClick}
                        disabled={currentQuestionIndex === 0}
                        className={button}
                    >
                        Previous
                    </button>
                    {currentQuestionIndex === data.length - 1 ? (
                        <Submit
                            link={"/anonymous-feed-back"}
                            postData={answer}
                        />
                    ) : (
                        <button
                            onClick={handleNextClick}
                            disabled={isNextButtonDisabled}
                            className={button}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
