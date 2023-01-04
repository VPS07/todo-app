import Todo from "./Todo";
import React, { useContext } from "react";
import TodoContxt from "../store/TodoContext";

const Todos: React.FC = () => {
  const todoContxt = useContext(TodoContxt);
  return (
    <div className="w-72 mt-6">
      {todoContxt.todos.map((x) => (
        <Todo
          key={x.id}
          item={x.text}
          removeTodo={todoContxt.onRemoveTodo.bind(null, x.id)}
        />
      ))}
    </div>
  );
};

export default Todos;
