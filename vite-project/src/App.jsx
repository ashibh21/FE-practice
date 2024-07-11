import React from "react";
import { useState, memo } from "react";

function App() {
  let c = 0;
  const [name, setName] = useState("Ashish");
  return (
    <div>
      <button
        onClick={() => {
          console.log("here");
          setName(Math.random());
        }}
      >
        Click me
      </button>
      <Header name={name}> </Header>
      <Header name="haha"> </Header>
      <Header name="haha"> </Header>
    </div>
  );
}

const Header = React.memo(function (props) {
  return (
    <div>
      <h1></h1>

      <h1>{props.name}</h1>
    </div>
  );
});

export default App;
