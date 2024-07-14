import { useEffect, useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  // const c = ((input + 1) * input) / 2;
  let ans = useMemo(() => {
    const c = ((input + 1) * input) / 2;
    return c;
  }, [input]);
  return (
    <div>
      <input
        type="text"
        id="ip"
        onChange={(e) => setInput(parseInt(e.target.value))}
      />
      <br />
      <h1> sum is {ans}</h1>
      <button
        onClick={() => {
          // c = (x * (x + 1)) / 2;
          setCount(count + 1);
        }}
      >
        Counter {count}
      </button>
    </div>
  );
}

export default App;
