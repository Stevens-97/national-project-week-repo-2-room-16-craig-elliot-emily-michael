import React from "react";
import InfoBlock from "../InfoBlock/infoBlock";
import { mockInfoBlock } from "../../libs/infoBlockMockData";
import CallToAction from "../CallToAction/callToAction";
import FadingImage from "../FadingImage/fadingImage";

import style from "./homePage.module.css";
import useScrollFade from "../talons/useHandleScroll";

export default function HomePage() {
    const { infoBlockSection } = style;
    const scrollY = useScrollFade();
    const callToActionOpacity = 1 - scrollY / (window.innerHeight + 100);
    const infoBlockOpacity = Math.min(1, (scrollY + 200) / window.innerHeight);

    return (
        <div>
            <div style={{ opacity: callToActionOpacity }}>
                <FadingImage
                    image="/static/book_stack_on_table.jpg"
                    altText='"Books on desk"'
                />
                <CallToAction />
            </div>
            <div
                className={infoBlockSection}
                style={{ opacity: infoBlockOpacity }}
            >
                {mockInfoBlock.map((info, index) => (
                    <InfoBlock
                        text={info.text}
                        imageUrl={info.imageUrl}
                        key={`info-block-${index}`}
                    />
                ))}
            </div>
        </div>
    );
}
