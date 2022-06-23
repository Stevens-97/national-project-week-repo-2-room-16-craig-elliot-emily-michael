import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../Home/Header";
import FeedbackIndex from "../FeedbackSection";
import HomeIndex from "../Home";
import AnonymousFeedbackSection from "../FeedbackSection/AnonymousFeedbackSection/index.js";
import { REACT_APP_herokuURLPath } from "../../config";

function App() {
  React.useEffect(() => {
    async function getUrl() {
      const response = await fetch(REACT_APP_herokuURLPath);
      const data = await response.json();
      console.log(data);
    }
    getUrl();
  }, []);

  return (
    <div>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/feedback" element={<FeedbackIndex />} />
        <Route path="/AnonymousFB" element={<AnonymousFeedbackSection />} />
      </Routes>
      <div className="App"></div>
    </div>
  );
}
export default App;
