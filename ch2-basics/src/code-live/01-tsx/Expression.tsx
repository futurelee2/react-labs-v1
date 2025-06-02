// JSX & TSX : 자바스크립트 + HTML 둘다 혼용해서 작성 가능
export default function Expression() {
  // 자바크스크립트
  const userName = "이미래";
  const greet = () => "안녕하세요!"; // 하나의 값으로 도출됨
  return (
    //HTML
    // html 안에 자바스크립트 값을 넣고 싶을 때 {} 중괄호 사용
    // {Expression} 표현식(=값으로 도출되는 것)을 중괄호로 묶어서 출력 가능
    <>
      <h2>{userName}</h2>
      <h3>2+3 = {2 + 3}</h3>
      <h2>{greet()}</h2>
    </>
  );
}
