import TodoItem from "./TodoItem";
import type { Todo } from "./TodoRoot";

interface Props {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

export default function TodoList({ todos, deleteTodo }: Props) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

// TodoList 에서는 deleteTodo을 안사용함
// TodoList 하위의 TodoIiem에서 deleteTodo을 사용함 -> 프롭스 드릴링
