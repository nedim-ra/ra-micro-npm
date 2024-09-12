import { IComboBoxOption } from "@fluentui/react";
import FluentButton from "../lib/components/FluentButton.tsx";
import { CaseFilePicker } from "../lib/main.ts";
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
      <CaseFilePicker
        label="SOMTHING"
        handleComboBoxChange={() => null}
        styles={{}}
        showErrorMessage={() => {}}
        selectedOption={{ key: "default", text: "default" }}
        caseOptions={[{ key: "default", text: "default" }]}
        setSelectedOption={() => null}
        getDomain={() =>
          new Promise((resolve) => {
            resolve("");
          })
        }
      />
      <h1>Vite + React</h1>
      Testing demo of component library
      <FluentButton />
    </>
  );
}

export default App;
