// ## 문제 2. state 값이 바뀔 때마다 효과 실행하기

import { useEffect, useState } from "react";

// - `CounterEffect.tsx` 파일에 함수형 컴포넌트 `CounterEffect`를 만드세요.
// - 버튼을 누를 때마다 숫자가 1씩 증가하도록 하세요.
// - **count 값이 바뀔 때마다**
//   콘솔에 `"count is {count}"`가 출력되게 하세요.

export default function CounterEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count is ${count}`);
  }, [count]);

  //   function counter() {
  //     setCount((c) => c + 1);
  //     console.log(`count is ${count}`);
  //   }

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>버튼</button>
      {/* <button onClick={counter}>버튼</button> */}

      <p>{count}</p>
    </>
  );
}
