import { useEffect, useState } from "react";

function App() {
  const [but, setBut] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          setBut(1);
          console.log(but);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setBut(2);
          console.log(but);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setBut(3);
          console.log(but);
        }}
      >
        3
      </button>

      <Todo id={but}></Todo>
    </div>
  );
}

function Todo({ id }) {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    fetch(`https://sum-server.100xdevs.com/todo?id=${id} `).then(
      async function (res) {
        const json = await res.json();
        console.log(json);
        setTodo(json.todo);
      }
    );
  }, [id]);

  return (
    <div>
      {
        <Data
          key={todos.id}
          title={todos.title}
          description={todos.description}
        ></Data>
      }
    </div>
  );
}

function Data({ key, title, description }) {
  return (
    <div>
      Id:{key}
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default App;
