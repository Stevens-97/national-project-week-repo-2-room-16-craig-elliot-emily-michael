import React from "react";
import ResourcePage from "../ResourcePage/resourcePage";
import HomePage from "../HomePage/homePage";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../Header";
import FeedbackIndex from "../FeedbackSection";
import AnonymousFeedbackSection from "../AnonymousFeedbackSection";
import { REACT_APP_herokuURLPath } from "../../config";

import styles from "./App.module.css";

function App() {
  // React.useEffect(() => {
  //   async function getUrl() {
  //     const response = await fetch(REACT_APP_herokuURLPath);
  //     const data = await response.json();
  //   }
  //   getUrl();
  // }, []);

  return (
    <div>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/feedback" element={<FeedbackIndex />} />
        <Route
          path="/anonymous-feed-back"
          element={<AnonymousFeedbackSection />}
        />
      </Routes>
      <div className="App"></div>
    </div>
  );
}
export default App;
