import { useCallback, useEffect, useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  // const c = ((input + 1) * input) / 2;
  let ans = useMemo(() => {
    const c = ((input + 1) * input) / 2;
    return c;
  }, [input]);

  

  const inp = useCallback(() => {
    console.log("from parent");
  }, []);


  return (
    <div>
      <input
        type="text"
        id="ip"
        onChange={(e) => setInput(parseInt(e.target.value))}
      />
      <br />
      <h1> sum is {ans}</h1>
      <ButtonComp inp={inp} />
    </div>
  );
}
const ButtonComp = ({ inp }) => {
  console.log("child");
  return (
    <div>
      <button> Child button</button>
    </div>
  );
};

export default App;
