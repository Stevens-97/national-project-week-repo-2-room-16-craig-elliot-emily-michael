import React from "react";
import styles from "./ResourceLinks.module.css";

export default function ResourceLinks({ resources }) {
  const { links, helpBox, heading } = styles;
  const { tutorials, title } = resources;

  const resourceSection = resources
    ? tutorials.map((tutorial) => {
        return (
          <div className={links}>
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
      <div>{resourceSection}</div>
    </div>
  );
}
