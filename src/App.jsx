import { useEffect, useState } from "react";
import "./App.css";
import NewTodoForm from "./component/NewTodoForm";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function toggleHandler(id, completed) {
    setTodos((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <h1>Todo App with React</h1>
      <NewTodoForm onSubmit={addTodo} />

      <h2>Todo List</h2>
      <TodoList
        todos={todos}
        toggleHandler={toggleHandler}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
