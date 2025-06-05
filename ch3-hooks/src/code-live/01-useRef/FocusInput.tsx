import { useRef } from "react"; // 구조분해할당처럼 받음 => {} 필요

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null); // <input> 을 가리킴 => 돔요소 가리킬때 사용
  function handleFocus() {
    //포커스주기
    inputRef.current?.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="입력.."></input>
      <button onClick={handleFocus}>클릭</button>
    </div>
  );
}
