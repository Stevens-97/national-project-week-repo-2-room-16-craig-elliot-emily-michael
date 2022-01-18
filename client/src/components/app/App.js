import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../Home/Header";
import FeedbackIndex from "../FeedbackSection";
import HomeIndex from "../Home";

function App() {

  return (
    <div>
      <nav>
      <Header/>
      </nav>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/feedback" element={<FeedbackIndex />} />
      </Routes>
      <div className="App">
      </div>
    </div>
   );
}

/*<Routes>
        <Route path="/" element={<Home />} />
        <Route path="feedback" element={<FeedbackSection />} />
      </Routes>*/
export default App;


// const [data, setData] = React.useState(null);

// React.useEffect(() => {
//    async function getMessage() {
//       console.log("useEffect in action");
//       const response = await fetch("http://localhost:5001/test");
//       const data = await response.json();
//       setData(data);
//       console.log(data.message);
//    }
//    getMessage();
// }, []);