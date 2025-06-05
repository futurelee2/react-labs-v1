import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const isLogin = true; // 로그인상태
  if (isLogin) {
    //로그인 상태 Home 으로 리다이렉트
    return <Navigate to="/" replace></Navigate>; // true이면 home ,fasle면 로그인페이지
  }

  return (
    <div>
      <h2>로그인 페이지</h2>
    </div>
  );
}
