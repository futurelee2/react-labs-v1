import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";

// /posts/123 경로에 접속하면,
// useParams()가 { id: "123" } 객체를 반환하고,
// id 변수에 "123"이 들어가고,
// posts 배열에서 id가 123인 게시글을 찾아 렌더링해줌

export default function PostDetailPage() {
  const { id } = useParams();
  const post = posts.find((post) => post.id == Number(id));
  if (!post) return <p>존재하지 않는 게시글입니다.</p>;
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/posts">목록으로</Link>
    </div>
  );
}
