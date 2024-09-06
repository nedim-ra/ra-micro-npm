import { useState } from "react";
import { FluentButton } from "../lib/main.ts";
import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit 2 <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      Testing demo of component library
      <FluentButton />
    </>
  );
}

export default App;
