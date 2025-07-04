import { Link, useParams } from "react-router-dom";
import { posts } from "../data/post";

export default function PostDetailPage() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) return <p>존재하지 않는 게시글 입니다.</p>;
  return (
    <div>
      <h2>{post.title}</h2>
      <h3>{post.body}</h3>
      <Link to="/posts">목록으로</Link>
    </div>
  );
}
