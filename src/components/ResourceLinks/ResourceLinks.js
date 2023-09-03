import React, { useRef } from "react";
import styles from "./ResourceLinks.module.css";
import classNames from "classnames";

export default function ResourceLinks({ resources }) {
    const {
        resourceContainer,
        link,
        helpBox,
        heading,
        resourceWrapper,
        linkContainer,
    } = styles;
    const { tutorials, title, imageLink } = resources;
    const carouselRef = useRef(null);

    const resourceSection = resources
        ? tutorials.map((tutorial, index) => {
              return (
                  <div className={resourceContainer} key={`tutorial-${index}`}>
                      {imageLink ? (
                          <image src={imageLink} height="100%" width="100%" />
                      ) : null}
                      <div className={linkContainer}>
                          <a
                              className={link}
                              href={tutorial?.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              {tutorial?.videoTitle}
                          </a>
                      </div>
                  </div>
              );
          })
        : null;

    return (
        <div className={helpBox} ref={carouselRef}>
            <h6 className={heading}>{title}</h6>
            <div className={resourceWrapper}>{resourceSection}</div>
        </div>
    );
}
