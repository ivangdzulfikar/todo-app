export default function TodoItem({
  id,
  title,
  completed,
  toggleHandler,
  deleteTodo,
}) {
  return (
    <li key={id}>
      <label>
        <input
          onChange={(e) => toggleHandler(id, e.target.checked)}
          checked={completed}
          type="checkbox"
          name="todo"
        />
        {title}
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </label>
    </li>
  );
}
