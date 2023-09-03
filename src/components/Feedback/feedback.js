import React, { useEffect } from "react";
import styling from "./feedback.module.css";

export default function Feedback({ title, setValue, index, value }) {
    const { input } = styling;

    function handleEvent(e) {
        setValue((prevState) => {
            const updatedState = { ...prevState };
            updatedState[`answer-${index}`] = e.target.value;
            return updatedState;
        });
    }

    useEffect(() => {
        if (!value?.[[`answer-${index}`]]) {
            setValue((prevState) => {
                const updatedState = { ...prevState };
                updatedState[`answer-${index}`] = "";
                return updatedState;
            });
        }
    }, [index]);

    return (
        <div>
            <label>{title}</label>
            <br></br>
            <textarea onChange={handleEvent} className={input}></textarea>
        </div>
    );
}
