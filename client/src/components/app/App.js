import React from "react";
import "./App.css";

function App() {
   const [data, setData] = React.useState(null);

   React.useEffect(() => {
      async function getMessage() {
         console.log("useEffect in action");
         const response = await fetch("http://localhost:5001/test");
         const data = await response.json();
         setData(data);
         console.log(data.message);
      }
      getMessage();
   }, []);

   return (
      <div className="App">
         <p>I'm working, check the console!</p>
      </div>
   );
}

export default App;
