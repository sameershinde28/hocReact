//hoc

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>HOC</h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
}

function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: "100px" }}>
      RED
      <props.cmp />
    </h2>
  );
}

function HOCGreen(props) {
  return (
    <h2 style={{ backgroundColor: "green", width: "100px" }}>
      GREEN
      <props.cmp />
    </h2>
  );
}

function HOCBlue(props) {
  return (
    <h2 style={{ backgroundColor: "blue", width: "100px" }}>
      BLUE
      <props.cmp />
    </h2>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}
