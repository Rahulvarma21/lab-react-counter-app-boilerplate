import { useState } from "react";
import "./App.css"

function App() {
  const [count, setCount] =  useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className="center">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div className="buttonStyle">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button id="resetBtn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default App;
