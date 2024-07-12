import React, { useEffect } from "react";
import { useState, memo } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 10000);
  }, []);

  return (
    <>
      {todos.map((todo, index) => (
        <CardWrapper
          key={index}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </>
  );
}

function CardWrapper({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  );
}

export default App;
