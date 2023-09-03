import React, { useEffect, useState } from "react";
import styling from "./rating.module.css";

export default function Rating({ title, setValue, index, value }) {
    const { ratings, ratingInputs, ratingEmojis, inputs, label } = styling;

    // Use local state to manage the selected rating for this component
    const [selectedRating, setSelectedRating] = useState(3);

    // Function to handle rating changes
    function handleEvent(e) {
        const newRating = Number(e.target.value);
        setSelectedRating(newRating);
        setValue((prevState) => {
            const updatedState = { ...prevState };
            updatedState[`answer-${index}`] = newRating;
            return updatedState;
        });
    }

    useEffect(() => {
        if (!value?.[[`answer-${index}`]]) {
            setValue((prevState) => {
                const updatedState = { ...prevState };
                updatedState[`answer-${index}`] = 3;
                return updatedState;
            });
        }
    }, [index]);

    // Set the selected rating to the value from props when the component mounts
    useEffect(() => {
        setSelectedRating(value?.[`answer-${index}`] || 3);
    }, [index, value]);

    const radioButtons = [1, 2, 3, 4, 5].map((value) => (
        <label key={value}>
            <input
                className={inputs}
                onChange={handleEvent}
                type="radio"
                id={value.toString()}
                name={title}
                value={value.toString()}
                checked={selectedRating === value}
            />
        </label>
    ));

    return (
        <div className={ratings}>
            <form>
                <label className={label} htmlFor={title}>
                    {title}
                </label>{" "}
                <div className={ratingInputs}>{radioButtons}</div>
                <div className={ratingEmojis}>
                    <label htmlFor="1">🙃</label>
                    <label htmlFor="5">🙂</label>
                </div>
            </form>
        </div>
    );
}
