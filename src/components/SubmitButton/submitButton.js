import React from "react";
import { Link } from "react-router-dom";
import styles from "./submitButton.module.css";
export default function Submit({ postData, link, disabled = false }) {
    const { submitButton, submitButtonContainer } = styles;

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Debug here is the data: ", postData);
    }

    return (
        <div className={submitButtonContainer}>
            <button
                className={submitButton}
                type="submit"
                onClick={handleSubmit}
                disabled={disabled}
            >
                <Link to={link} className="feedbacklink">
                    Submit
                </Link>
            </button>
        </div>
    );
}
