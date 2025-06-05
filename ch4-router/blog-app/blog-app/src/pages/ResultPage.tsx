import { useSearchParams } from "react-router-dom";

export default function ResultPage() {
  const [searchParms] = useSearchParams(); // 튜플 리턴함, 검색화면에서 정보 가져오는 것
  const q = searchParms.get("q"); // 키를 읽음
  return (
    <div>
      <h2>검색 결과 페이지</h2>
      <p>검색어: {q}</p>
    </div>
  );
}
