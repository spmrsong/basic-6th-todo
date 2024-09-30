import { Todo } from "../app/types/todo.types";

export const getTodos = async () => {
  const res = await fetch("http://localhost:5000/todos");
  const todos: Todo[] = await res.json();

  return todos;
};

export const getTodoDetail = async (id: string) => {
  const res = await fetch(`http://localhost:5000/todos/${id}`);
  const todo: Todo = await res.json();

  return todo;
};
