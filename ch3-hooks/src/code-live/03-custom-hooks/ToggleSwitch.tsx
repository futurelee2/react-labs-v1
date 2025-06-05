// ON/OFF

import { useToggle, useState } from "./useToggle";

// export default function ToggleSwitch(params) {
//   const [on, setOn] = useState<boolean>(false);

//   const toggle = () => {
//     setOn((v) => !v);
//   };

//   return (
//     <>
//       <button onClick={toggle}>{on ? "켜짐" : "꺼짐"}</button>
//     </>
//   );
// }

export default function ToggleSwitch() {
  const [on, toggle] = useToggle();
  const [on2, toggle2] = useToggle(); // 독립적으로 사용가능하다..?

  return (
    <>
      <button onClick={toggle}>{on ? "켜짐" : "꺼짐"}</button>
      <button onClick={toggle2}>{on2 ? "켜짐" : "꺼짐"}</button>
    </>
  );
}
