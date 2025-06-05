import { Link, useNavigate } from "react-router-dom";
import { posts } from "../data/post";

export default function PostListPage() {
  const nav = useNavigate();
  return (
    <div>
      <h2>전체게시글</h2>
      <ul color="black">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => nav("/posts/new")}>새 게시글 작성</button>
    </div>
  );
}
