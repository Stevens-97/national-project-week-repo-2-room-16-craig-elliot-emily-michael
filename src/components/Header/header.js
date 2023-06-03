import React from "react";
import { Link } from "react-router-dom";

import styles from "./header.module.css";

export default function Header() {
  const { header, homelink } = styles;

  return (
    <div className={header}>
      <Link to="/" className={homelink}>
        <h1>School of Code Bootcamper Portal</h1>
      </Link>
    </div>
  );
}
