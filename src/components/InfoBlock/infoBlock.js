import React from "react";
import classNames from "classnames";

import styling from "./infoBlock.module.css";

export default function InfoBlock({ imageUrl, text }) {
    const {
        imageWrapper,
        textWrapper,
        wrapper,
        tab,
        textBlock,
        mainWrapper,
        image,
    } = styling;

    const imageSection = imageUrl ? (
        <div className={imageWrapper}>
            <img className={image} src={imageUrl} />
        </div>
    ) : null;

    const textSection = text ? (
        <div className={textWrapper}>
            {text.map((section, index) => {
                return <p className={textBlock} key={`text-${index}`}>{section}</p>;
            })}
        </div>
    ) : null;

    return (
        <div className={mainWrapper}>
            <div className={tab} />
            <div className={wrapper}>
                {imageSection}
                <div>{textSection}</div>
            </div>
        </div>
    );
}
