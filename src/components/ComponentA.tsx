import { useState } from "react";

function ComponentA() {
  const [count, setCount] = useState(0);
  console.log("Hello from src componentA");
  return (
    <>
      Hello from RA Micro npm package component
      <button type="button" onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default ComponentA;
