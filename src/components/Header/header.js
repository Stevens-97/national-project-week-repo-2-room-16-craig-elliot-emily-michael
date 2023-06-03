import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

export default function Header() {
  const { header, homelink, navigationLinks, navigationLink } = styles;

  return (
    <div className={header}>
      <div>
        <Link to="/" className={homelink}>
          <h1>School of Code Bootcamper Portal</h1>
        </Link>
      </div>
      <div className={navigationLinks}>
        <Link to="/resources" className={homelink}>
          <p className={navigationLink}>Resources</p>
        </Link>
        <Link to="/feedback" className={homelink}>
          <p className={navigationLink}>Feedback</p>
        </Link>
      </div>
    </div>
  );
}
