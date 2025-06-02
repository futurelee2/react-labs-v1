// 만약 input 요소 같은 사용자 입력을 받는 요소 값을 즉시 라이브로 반영하고 싶다면?

import { useState } from "react";

export default function LiveShowInput() {
  const [text, setText] = useState("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <div>
      <input onChange={handleChange} placeholder="입력..." />
      <p>입력값 : {text}</p>
    </div>
  );
}
