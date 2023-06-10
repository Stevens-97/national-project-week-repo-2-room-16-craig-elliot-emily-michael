import React from "react";
import styling from "./callToAction.module.css";

export default function CallToAction() {
    const { imageWrapper, textWrapper, wrapper, text } = styling;

    return (
        <div className={wrapper}>
            <div className={imageWrapper}>
                <img
                    src="/static/computer_on_desk.jpg"
                    alt="computer-on-desk"
                    width={"auto"}
                    height={"350px"}
                />
            </div>
            <div className={textWrapper}>
                <p className={text}>Level up your bootcamp journey!</p>
                <p className={text}>
                    Explore valuable resources and share your feedback to
                    enhance your learning experience.
                </p>
            </div>
        </div>
    );
}
