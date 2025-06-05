import { useRef, useState } from "react";

// - `LikeButton.tsx` 파일에 함수형 컴포넌트 `LikeButton`을 만드세요.
// - “좋아요” 버튼을 빠르게 여러 번 눌러도,
//   버튼 클릭 시마다 **1초 동안 비활성화**되어 중복 클릭이 안 되게 하세요.
// - 1초 후 버튼이 다시 활성화됩니다.
// - 반드시 useRef로 타이머 상태를 관리하세요.

export default function LikeButton() {
  const [btn, setBtn] = useState(false);
  const likechk = useRef(false);

  function likeClick() {
    setBtn(() => {
      setTimeout(() => {
        btn = !btn;
        // likechk.current = !likechk.current;
      }, 1000);
    });
  }
  return (
    <div>
      <button onClick={likeClick} disabled={likechk.current}>
        좋아요
      </button>
    </div>
  );
}

//useRef 는 보여지는곳에 사용하게되면 렌더링이 안된다.. -> disabled에 사용하면 안됨?
// onClick에 이미 렌더링되는걸 사용했어도..,?
