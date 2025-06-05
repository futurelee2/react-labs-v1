import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const islogin = false;
  if (islogin) {
    // replace 이전 페이지 돌아갈 수 없음
    // 로그인 시, replace 많이 사용함
    // 모든 이전 페이지 기록이 사라지는 것이 아니라, 이전 페이지 기록만 덮어씌워짐
    return <Navigate to="/" replace></Navigate>;
  }
  return <div> 로그인 페이지 입니다. </div>;
}
