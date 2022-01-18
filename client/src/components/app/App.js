import React from "react"
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/http://localhost:5001")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
             <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
