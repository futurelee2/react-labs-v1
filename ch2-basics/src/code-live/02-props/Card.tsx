//컴포넌트를 props로 받는 방법
type CardProps = {
  title: string;
  children: React.ReactNode; // 타입스크립트라서 적어줘야함. 모든것을 적을수있음(받을수있음)
};

//slot 패턴 (끼워넣는), 조합형 UI 패턴
// 이름을 반드시 children으로 줘야함
export default function Card({ title, children }: CardProps) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
}

////// App.tsx 에서 사용 시

{
  /* <Card title = "새싹카드", children = {<h1>???<h1/>} /> */
}
{
  /* <Card title="새싹카드">
<h1>children</h1>
</Card> */
}
