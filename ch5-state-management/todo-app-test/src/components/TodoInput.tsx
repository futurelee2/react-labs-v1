import { useState } from "react";
import { useTodoStore } from "../store/zustand_store";

export default function TodoInput() {
  const [input, setInput] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput("");
    }
  }

  //사용자 입력 →  setInput(input = e.target.value) → input 상태 변경 → 화면 렌더링
  // 제출 버튼 클릭 -> handleSubmit -> 이미 바뀌어진 input 값으로 addTodo호출

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: 8, marginBottom: 20 }}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일 추가하기"
        style={{ flex: 1, padding: 8 }}
      ></input>
      <button type="submit"> 추가</button>
    </form>
  );
}
