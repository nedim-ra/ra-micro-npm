import { useState } from "react";

function ComponentA() {
  const [count, setCount] = useState(0);

  return (
    <>
      Hello from RA Micro npm package component
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default ComponentA;
