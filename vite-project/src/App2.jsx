import React from "react";
import { useState, memo } from "react";
import { Todo } from "./components/Todo";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "one",
      description: "oneeeee",
    },
    {
      id: 2,
      title: "two",
      description: "twooooo",
    },
    {
      id: 3,
      title: "three",
      description: "threeeee",
    },
  ]);

  return (
    <>
      <button
        onClick={() => {
          setTodo([
            ...todo,
            {
              id: 4,
              title: "awcsd",
              description: "aevdsf",
            },
          ]);
        }}
      >
        {" "}
        add
      </button>
      {todo.map((item) => (
        <Todo key={item.id} title={item.title} description={item.description} />
      ))}
    </>
  );
}

export default App;
