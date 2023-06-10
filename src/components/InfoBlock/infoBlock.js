import React from "react";
import classNames from "classnames";

import styling from "./infoBlock.module.css";

const cx = classNames.bind(styling);

export default function InfoBlock({ imageUrl, text, position }) {
    const {
        imageWrapper,
        textWrapper,
        wrapperLeftAligned,
        wrapperRightAligned,
        wrapperCenterAligned,
        wrapper,
        information,
    } = styling;

    const alignment = cx({
        [wrapperLeftAligned]: position === "left",
        [wrapperRightAligned]: position === "right",
        [wrapperCenterAligned]: position === "center",
    });

    const imageSection = imageUrl ? (
        <div className={imageWrapper}>
            <img src={imageUrl} />
        </div>
    ) : null;

    const textSection = text ? (
        <div className={textWrapper}>
            {text.map((section, index) => {
                return <p key={`text-${index}`}>{section}</p>;
            })}
        </div>
    ) : null;

    return (
        <div className={wrapper}>
            {imageSection}
            <div className={alignment}>{textSection}</div>
        </div>
    );
}
