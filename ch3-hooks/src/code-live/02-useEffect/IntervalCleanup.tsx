import { useEffect, useState } from "react";

export default function IntervalCleanup() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    //
    const timerId = setInterval(() => {
      setSeconds((s) => s + 1); // 오류코드
    }, 1000);
    return () => clearInterval(timerId);
  }, []); // 빈배열 vs seconds 넣는거랑 무슨차이?

  return <div>{seconds}초 경과</div>;
}
