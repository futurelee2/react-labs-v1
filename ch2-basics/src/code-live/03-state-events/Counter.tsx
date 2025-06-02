//클릭 시 +1 증가하는 버튼을 만들고자 한다.
import { useState } from "react";

export default function Counter() {
  // count: (현재)상태변수
  // setCount : count 의 값을 바꿀때 사용
  //선언적 작성법 <-> 돔 : 명령적 방식
  const [count, setCount] = useState(0);
  const [text, setText] = useState(""); // useState(초기값)

  function upCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={upCount}>+1</button>
      <p>현재값: {count}</p>
      <button onClick={() => setText(text + "a")}>+1</button>
      <p>현재 단어: {text}</p>
    </div>
  );
}

// 상태변수 : 리액트의 관심 대상임. 일반 변수로는 return 에서 값 변경 불가
// 바뀐 부분을 보고 렌더링을 해줌
// 상태변수는 이벤트랑 같이 옴
