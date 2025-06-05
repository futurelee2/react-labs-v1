import { useTodoStore, type Todo } from "../store/zustand_store";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const del = useTodoStore((state) => state.deleteTodo);
  return (
    <li style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
      <span style={{ flex: 1 }}>{todo.text}</span>
      <button onClick={() => del(todo.id)}>삭제</button>
    </li>
  );
}
