import React from "react";
import styling from "./feedback.module.css";

export default function Feedback({ text, setValue }) {
  const { input } = styling

  function handleEvent(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <label>{text}</label>
      <br></br>
      <textarea onChange={handleEvent} className={input}></textarea>
    </div>
  );
}
