import React from "react";
import InfoBlock from "../InfoBlock/infoBlock";
import {
    mockInfoBlock
} from "../../libs/infoBlockMockData";
import CallToAction from "../CallToAction/callToAction";

import style from "./homePage.module.css";

export default function HomePage() {
    const { wrapperRightAligned, wrapperLeftAligned, wrapperCenterAligned } =
        style;
    return (
        <div>
            <CallToAction />
            {mockInfoBlock.map((info, index) => <InfoBlock
                text={info.text}
                imageUrl={info.imageUrl}
                key={`info-block-${index}`}
            />)}
        </div>
    );
}
