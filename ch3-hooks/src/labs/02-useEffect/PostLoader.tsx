// ## 문제 3. API 비동기 데이터 불러오기 (로딩 처리 포함)

import { useEffect, useState } from "react";

// - `PostLoader.tsx` 파일에 함수형 컴포넌트 `PostLoader`를 만드세요.
// - 마운트 시 **[https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1)** API에서
//   게시글 정보를 비동기로 받아와,
//   제목과 본문을 화면에 출력하세요.
// - 데이터를 가져오는 동안에는 `"로딩중..."`이라는 텍스트가 보여야 합니다.
// - \*\*에러가 발생하면 "에러!"\*\*를 보여주세요.

export default function PostLoader(params) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLoading() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await res.json();
        setTimeout(() => {
          console.log(data);
        });
      } catch (err) {
        alert(err);
      }
    }
  });

  if (loading) return <p>로딩중...</p>;

  return (
    <div>
      <p>{post}</p>
    </div>
  );
}
