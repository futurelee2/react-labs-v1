import { useRef, useState } from "react";

export default function Timer() {
  // const [timerid, setTimerId] = useState(0); // 굳이 timerid는 안보여지니까 렌더링되는걸 안써도됨
  const timerId = useRef<number | null>(null);
  const [count, setCount] = useState(0);

  //앞으로 set 형태 사용할때는 함수형태로 적어야함!
  function start() {
    timerId.current = setInterval(() => {
      // setCount(count + 1); // 이렇게 쓰면 안됨.  왜 안되냐???? -> 함수형태로 사용해야함 (클로저때문 : 맨처음 count 0만 기억함.)
      setCount((c) => c + 1); //리액트에서 제공하는 방법임. 첫번째 값은 무조건 현재값임.
      //setTimerId();
    }, 1000);
  }

  function stop() {
    clearInterval(timerId.current); // setInterval 은 반환값이 Number임. 따라서 이 숫자를 지우는 것.
  }
  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={start}>시작</button>
      <button onClick={stop}>멈춤</button>
    </div>
  );
}
