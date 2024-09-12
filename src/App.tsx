import { IComboBoxOption } from "@fluentui/react";
import FluentButton from "../lib/components/FluentButton.tsx";
import "./App.css";
import reactLogo from "./assets/react.svg";

export interface IFileQuery {
  searchTerm?: string;
  selectedCase?: IComboBoxOption;
  phraseSearch?: boolean;
  startDate?: Date;
  endDate?: Date;
}

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      Testing demo of component library
      <FluentButton />
    </>
  );
}

export default App;
