import React, { createContext } from "react";
import TodoModel from "../models/TodoModel";

export type todoContxtType = {
  todos: TodoModel[];
  addTodoHandler: (text: string) => void;
  onRemoveTodo: (id: string) => void;
};

const TodoContxt = createContext<todoContxtType>({
  todos: [],
  addTodoHandler: (text: string) => {},
  onRemoveTodo: (id: string) => {},
});

export default TodoContxt;
