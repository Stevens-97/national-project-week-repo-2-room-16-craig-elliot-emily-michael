import React from "react";
import styling from "./infoBlock.module.css";

export default function InfoBlock({ imageUrl, text }) {
  const { imageWrapper, textWrapper } = styling;

  const imageSection = imageUrl ? (
    <div className={imageWrapper}>
      <img src={imageUrl} />
    </div>
  ) : null;

  return (
    <div>
      {imageSection}
      <div className={textWrapper}>{text}</div>
    </div>
  );
}
