import { useTodoStore } from "../store/zustand_store";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
