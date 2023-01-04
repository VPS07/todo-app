import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import TodoModel from "./models/TodoModel";
import TodoContxt, { todoContxtType } from "./store/TodoContext";

function App() {
  //Setting state for todos
  const [todos, setTodos] = useState<TodoModel[]>([]);

  // Adding new todo in todos array
  const AddTodoHandler = (todoTxt: string) => {
    //defining new todo using TodoModel object which has text and id. Id is already defined but we are passing the text of todo
    const newTodo = new TodoModel(todoTxt);

    setTodos((prevTodo) => [newTodo, ...prevTodo]);
  };

  //Remove todo on click of button by using key of particular todo
  const onRemoveTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: todoContxtType = {
    todos: todos,
    addTodoHandler: AddTodoHandler,
    onRemoveTodo: onRemoveTodo,
  };

  return (
    <TodoContxt.Provider value={contextValue}>
      <div className="flex flex-col items-center mt-10">
        <AddTodo />
        <Todos />
      </div>
    </TodoContxt.Provider>
  );
}

export default App;
