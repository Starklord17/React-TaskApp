import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <div className="TodoCounter">
      <h1 id="title">TaskApp</h1>

      {completedTodos === totalTodos && <h1>All tasks completed</h1>}
      {completedTodos !== totalTodos && (
        <h1>
          You have completed <span>{completedTodos}</span> of{" "}
          <span>{totalTodos}</span> Tasks
        </h1>
      )}
    </div>
  );
}

export { TodoCounter };
