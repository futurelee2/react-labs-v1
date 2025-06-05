import { useSearchParams } from "react-router-dom";

export default function PostResultPage() {
  const [serchParams] = useSearchParams();
  const q = serchParams.get("q");

  return (
    <div>
      <h2>검색 결과 페이지</h2>
      <div>검색어: {q}</div>
    </div>
  );
}
