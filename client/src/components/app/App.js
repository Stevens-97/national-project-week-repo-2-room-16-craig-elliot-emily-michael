import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
function App() {


  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="feedback" element={<FeedbackSection />} />
      </Routes>
      <div className="App">
        <p>I'm working, check the console!</p>
      </div>
    </div>
   );
}

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