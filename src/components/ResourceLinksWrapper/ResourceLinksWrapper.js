import React from "react";
import FeedbackHeader from "../FeedbackHeader";
import ResourceLinks from "../ResourceLinks";
import resourceMockData from "../../libs/resourceMockData";

export default function ResourceLinksWrapper() {
  const resourceSection = resourceMockData.map((resources) => {
    return <ResourceLinks resources={resources} />;
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <FeedbackHeader />
      {resourceSection}
    </div>
  );
}
