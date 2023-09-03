import React from "react";
import ResourceLinks from "../ResourceLinks";
import resourceMockData from "../../libs/resourceMockData";

import styles from "./resourceLinksWrapper.module.css";

export default function ResourceLinksWrapper() {
    const { wrapper } = styles;

    const resourceSection = resourceMockData.map((resources, index) => {
        return (
            <ResourceLinks
                resources={resources}
                key={`resource-link-${index}`}
            />
        );
    });

    return <div className={wrapper}>{resourceSection}</div>;
}
