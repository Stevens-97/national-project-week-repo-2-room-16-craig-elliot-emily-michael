import React from "react";
import "./style.css";

export default function ResourceLinks({ resources }) {
  const { tutorials, title } = resources;

  const resourceSection = resources
    ? tutorials.map((tutorial) => {
        return (
          <div className="links">
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
    <div className="help-box">
      <h6 className="title">{title}</h6>
      <div>{resourceSection}</div>
    </div>
  );
}
