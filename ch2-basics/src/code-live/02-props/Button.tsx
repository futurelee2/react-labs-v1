// props로 함수를 넘김

//객체의 타입 지정하는 것 => 구조임
type ButtonProps = {
  label: string;
  //함수
  onClick: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>; // 리액트에서 제공하는 속성 -> 돔 잡을 필요없음
} // {onClick()} 아님. 단순히 onClick 함수를 값으로 넘기는 것..?
// 여기에서  onClick 에 함수를 바로 줘도 됨
// 데이터를 오고가는데 있어 막힘이 존재함 -> 그래서 부모에게 줘서 처리하는 것이 기본적 방법
