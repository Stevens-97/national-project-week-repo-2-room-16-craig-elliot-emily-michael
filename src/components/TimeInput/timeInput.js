import React, { useEffect, useState } from "react";
import styles from "./timeInput.module.css";

export default function TimeInput({
    setValue,
    title,
    index,
    value = null,
    setAnswerRequired,
}) {
    const { inputBox } = styles;
    const [localValue, setLocalValue] = useState(
        value ? value[`answer-${index}`] : ""
    );

    useEffect(() => {
        if (!localValue) {
            setAnswerRequired(true);
        } else {
            setAnswerRequired(false);
            setValue((prevState) => {
                const updatedState = { ...prevState };
                updatedState[`answer-${index}`] = localValue;
                return updatedState;
            });
        }
    }, [index, localValue, setAnswerRequired, setValue]);

    function handleEvent(e) {
        setLocalValue(e.target.value);
    }

    return (
        <div>
            <label>{title}</label>
            <br></br>
            <input
                onChange={handleEvent}
                className={inputBox}
                type="date"
                value={localValue}
            />
        </div>
    );
}
