import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const nav = useNavigate();

  function handleSearch() {
    nav(`/result?q=${encodeURIComponent(input)}`);
  }

  return (
    <div>
      <h1> 검색페이지</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="검색어를 입력하세요"
      ></input>
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}
