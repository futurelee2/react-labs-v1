import { Link } from "react-router-dom";

export default function PostNewPage() {
  return (
    <div>
      <h1>새 글 작성 페이지</h1>
      <Link to="/posts">목록으로</Link>
    </div>
  );
}
