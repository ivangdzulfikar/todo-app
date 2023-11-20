import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, toggleHandler, deleteTodo }) => {
  return (
    <ul>
      {todos.length === 0 && "Not Todo yet"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleHandler={toggleHandler}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
