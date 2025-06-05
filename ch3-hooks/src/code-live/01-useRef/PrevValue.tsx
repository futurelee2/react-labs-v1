import { useState, useRef } from "react";

export default function PrevValue() {
  const [value, setValue] = useState("");
  const preValue = useRef("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    preValue.current = value; // setValue 전에는 value 는 이전값임 ->  이걸 useRef넣음
    setValue(e.target.value);
  }
  return (
    <div>
      <input value={value} type="text" onChange={handleChange} />
      <p>이전 값 : {preValue.current}</p>
    </div>
  );
}

//state = 상태가 변하게되면 변함 => value 로 지정 ?? 지정하면 어떻게..? value 먼지
