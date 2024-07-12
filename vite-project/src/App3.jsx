import React from "react";
import { useState, memo } from "react";

function App() {
  return (
    <>
      <CardWrapper>
        <div>I am inner</div>
      </CardWrapper>
    </>
  );
}

function CardWrapper({ children }) {
  console.log(children);
  return (
    <div
      style={{
        border: "2px solid black",
      }}
    >
      {children}
    </div>
  );
}

export default App;
