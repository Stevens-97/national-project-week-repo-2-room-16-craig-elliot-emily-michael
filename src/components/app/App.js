import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../Header";
import FeedbackIndex from "../FeedbackSection";
import ResourceLinksWrapper from "../ResourceLinksWrapper";
import AnonymousFeedbackSection from "../AnonymousFeedbackSection";
import { REACT_APP_herokuURLPath } from "../../config";

function App() {
  React.useEffect(() => {
    async function getUrl() {
      const response = await fetch(REACT_APP_herokuURLPath);
      const data = await response.json();
    }
    getUrl();
  }, []);

  return (
    <div>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/" element={<ResourceLinksWrapper />} />
        <Route path="/feedback" element={<FeedbackIndex />} />
        <Route path="/AnonymousFB" element={<AnonymousFeedbackSection />} />
      </Routes>
      <div className="App"></div>
    </div>
  );
}
export default App;
