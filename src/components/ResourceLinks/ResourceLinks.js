import React from "react";
import styles from "./resourceLinks.module.css";

export default function ResourceLinks({ resources }) {
  const { links, helpBox, heading, resourceWrapper } = styles;
  const { tutorials, title } = resources;

  const resourceSection = resources
    ? tutorials.map((tutorial, index) => {
      return (
        <div className={links} key={`tutorial-${index}`}>
          <a
            href={tutorial?.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tutorial?.videoTitle}
          </a>
        </div>
      );
    })
    : null;

  return (
    <div className={helpBox}>
      <h6 className={heading}>{title}</h6>
      <div className={resourceWrapper}>{resourceSection}</div>
    </div>
  );
}
