import React, { Component, useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(++count);
  };
  return (
    <div className="App">
      <div onClick={handleClick}>Click Me</div>
      <div>Clicks: {count}</div>
    </div>
  );
}

export default App;
