import React, { useEffect } from "react";
import DropdownInput from "../DropdownInput";
import styles from "./basicDropdown.module.css";

export default function BasicDropdown({ title, data, setValue, index, value }) {
    const { inputBox, dropdownSection } = styles;

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
                updatedState[`answer-${index}`] = data[0];
                return updatedState;
            });
        }
    }, []);

    return (
        <div className={dropdownSection}>
            <label for={title}>{title}</label>
            <select red="theInput" className={inputBox} onClick={handleEvent}>
                {data.map((item, key) => {
                    return (
                        <DropdownInput
                            value={item}
                            key={`drop-down-input-${key}`}
                        />
                    );
                })}
            </select>
        </div>
    );
}
