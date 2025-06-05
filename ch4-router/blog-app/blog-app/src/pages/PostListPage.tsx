import { posts } from "../data/posts";
import { Link, useNavigate } from "react-router-dom";

// useNavigate 훅을 호출
// 보통 버튼 클릭같은 이벤트 핸들러 안에서 호출

//Navigate는 랜더링 될때 자동으로 경로를 바꿔버림
// 로그인 상태에 따라 로그인 페이지로 리다이렉트 시키거나,
// 특정 조건에서 자동으로 이동시키고 싶을 때 씀
// <Navigate /> 는 리턴에서만 사용가능!!! if문 등에서는 사용 불가능

export default function PostListPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h2> 전체 게시글</h2>
      <ul>
        {posts.map((post) => (
          // <li key={post.id}>{post.title}</li>
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}></Link>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/posts/new")} className="pt-4">
        새 게시글 작성
      </button>
    </div>
  );
}
