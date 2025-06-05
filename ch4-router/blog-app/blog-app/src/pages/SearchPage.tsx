import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    // 검색 결과 페이지로 이동 (쿼리 스트링으로 값 넘겨주기)
    // 부가정보임. result 페이지로 이동하는 것은 동일함
    navigate(`/result?q=${encodeURIComponent(input)}`);
  }
  return (
    <div>
      <h2>검색 페이지</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}

// ? 다음에 파라미터를 보낼때 k(보통 p로 사용)=v 형태로 보냄
// // 쿼리스트링 or 쿼리 파라미터 = 추가적인 파라미터를 보내는 것
