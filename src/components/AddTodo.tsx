import React, { useContext, useRef } from "react";
import TodoContxt from "../store/TodoContext";

const AddTodo: React.FC = () => {
  const todoConxt = useContext(TodoContxt);
  const todoTextRef = useRef<HTMLInputElement>(null);

  //Function for handling form submit when user presses the button
  function onSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    const eneteredTxt = todoTextRef.current!.value;

    if (eneteredTxt.trim().length == 0) return;

    //Adding new todo in todos array through addTodoHandler function
    todoConxt.addTodoHandler(eneteredTxt);
    todoTextRef.current!.value = "";
  }

  return (
    <form className="space-x-3" onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Write your todo here"
        className="px-4 py-1 outline-none border border-gray-400 rounded focus:border-sky-400 focus:ring-1"
        ref={todoTextRef}
      />
      <button className="bg-blue-300 px-4 py-1.5 rounded-md hover:bg-blue-500">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
