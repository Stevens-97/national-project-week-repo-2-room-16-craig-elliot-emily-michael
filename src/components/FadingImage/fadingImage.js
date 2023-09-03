import React from "react";

import style from "./fadingImage.module.css";

export default function FadingImage({ image, altText }) {
    const { fadingImage, fadingImageContainer } = style;

    return (
        <div className={fadingImageContainer}>
            <img className={fadingImage} src={image} alt={altText} />
        </div>
    );
}
