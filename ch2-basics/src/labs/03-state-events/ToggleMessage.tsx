import { useState } from "react";

// - `ToggleMessage.tsx`에 함수형 컴포넌트 `ToggleMessage`를 만드세요.
// - useState로 `isVisible` 상태(boolean, 초기값: false)를 만들고,
// - “메시지 보기/숨기기” 버튼 클릭 시 isVisible 값을 반전(toggle)시키세요.
// - isVisible이 true일 때만 `<p>비밀 메시지입니다!</p>`를 화면에 조건부 렌더링 하세요.

export default function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  function boolChkFunc() {
    if (boolchk) return <p>비밀 메시지입니다!</p>;
  }

  return (
    <>
      <button onClick={boolChkFunc}>메세지 보기/숨기기</button>
    </>
  );
}
