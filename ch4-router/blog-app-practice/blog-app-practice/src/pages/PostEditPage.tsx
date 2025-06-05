// 수정필요

import { Link, useParams } from "react-router-dom";

export default function PostEditPage() {
  const { id } = useParams();
  return (
    <div>
      <h2>게시글 수정 (id : `${id}`)</h2>
      <Link to={`/posts/${id}`}>← 상세로</Link>
    </div>
  );
}
