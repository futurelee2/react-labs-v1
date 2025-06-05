import { useState } from "react";

type ToggleReturn = [boolean, () => void];

export function useToggle(initial = false): ToggleReturn {
  // use로 시작해야함. 아니면 에러남
  // 그냥 적는 것 보다 타입별칭 사용하는 것이 더 좋음
  // default 안함. 하나만 받을때..?

  const [on, setOn] = useState<boolean>(initial);

  const toggle = () => {
    setOn((v) => !v);
  };

  return [on, toggle];
}
