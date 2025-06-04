import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>[+1]</button>
        <button onClick={() => setCount(count - 1)}>[-1]</button>
        <p> 현재값 : {count}</p>
      </div>
    </>
  );
}
