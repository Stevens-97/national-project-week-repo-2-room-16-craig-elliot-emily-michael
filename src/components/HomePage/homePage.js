import React from "react";
import InfoBlock from "../InfoBlock/infoBlock";
import {
    firstMockInfoBlock,
    secondMockInfoBlock,
    thirdMockInfoBlock,
} from "../../libs/infoBlockMockData";
import CallToAction from "../CallToAction/callToAction";

import style from "./homePage.module.css";

export default function HomePage() {
    const { wrapperRightAligned, wrapperLeftAligned, wrapperCenterAligned } =
        style;
    return (
        <div>
            <CallToAction />
            <div className={wrapperLeftAligned}>
                <InfoBlock
                    text={firstMockInfoBlock.text}
                    imageUrl={firstMockInfoBlock.imageUrl}
                    position="right"
                />
            </div>
            <div className={wrapperRightAligned}>
                <InfoBlock
                    text={secondMockInfoBlock.text}
                    imageUrl={secondMockInfoBlock.imageUrl}
                />
            </div>
            <div className={wrapperLeftAligned}>
                <InfoBlock
                    text={thirdMockInfoBlock.text}
                    imageUrl={thirdMockInfoBlock.imageUrl}
                />
            </div>
        </div>
    );
}
