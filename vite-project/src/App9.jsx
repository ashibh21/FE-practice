import { useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atom/count";



// content of store
// import { atom } from "recoil";
// export const countAtom = atom({
//   key: "countAtom",
//   default: 0,
// });


function App() {
  return (
    <div>
      <Count />
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons({}) {
  const [count, setcount] = useRecoilState(countAtom);

  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setcount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
