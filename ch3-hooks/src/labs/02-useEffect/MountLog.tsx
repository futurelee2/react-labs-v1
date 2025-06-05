import { useEffect } from "react";

// - `MountLog.tsx` 파일에 함수형 컴포넌트 `MountLog`를 만드세요.
// - 이 컴포넌트는 **마운트(처음 화면에 나타날 때) 한 번만**
//   콘솔에 `"Mount!"`라는 메시지를 출력해야 합니다.

export default function MountLog() {
  useEffect(() => {
    console.log("Mount!");
  }, []);
}
