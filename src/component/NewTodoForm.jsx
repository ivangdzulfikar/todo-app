import { useState } from "react";

const NewTodoForm = ({ onSubmit }) => {
  const [item, setItem] = useState("");

  function handlerSubmit(e) {
    e.preventDefault();
    if (item === "") return;

    onSubmit(item);

    setItem("");
  }

  return (
    <form onSubmit={handlerSubmit} action="">
      <label htmlFor="item">Create Todo</label> <br />
      <input
        type="text"
        id="item"
        name="item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button>Create</button>
    </form>
  );
};

export default NewTodoForm;
