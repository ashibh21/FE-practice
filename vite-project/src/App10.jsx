import { useRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "./store/atom/count";

// Store content
// import { atom, selector } from "recoil";

// export const countAtom = atom({
//   key: "countAtom",
//   default: 0,
// });

// export const evenSelector = selector({
//   key: "evenSelector",
//   get: ({ get }) => {
//     const count = get(countAtom);
//     return count % 2 == 0;
//   },
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
  return (
    <div>
      <b>{count}</b>
      <Even />
    </div>
  );
}
function Even() {
  const count = useRecoilValue(evenSelector);

  if (count == 0) {
    return <div></div>;
  } else return <div>Even</div>;
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
