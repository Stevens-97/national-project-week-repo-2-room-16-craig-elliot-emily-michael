import React from "react";
import { useState } from "react";
import DropdownInput from "../DropdownInput";
import styles from "./basicDropdown.module.css";

export default function BasicDropdown({ title, data, setValue }) {
  const { inputBox } = styles;

  const [dataSet, setDataSet] = useState(data);

  function handleEvent(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <label for={title}>{title}</label>
      <br></br>
      <select red="theInput" className={inputBox} onClick={handleEvent}>
        {dataSet.map((item) => {
          return <DropdownInput value={item.value} />;
        })}
      </select>
    </div>
  );
}
