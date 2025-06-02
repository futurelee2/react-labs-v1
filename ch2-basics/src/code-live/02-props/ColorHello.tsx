//props 에 따라서 글자의 색상을 다르게하고 싶을 때

type UserProps = {
  name: string;
  color?: string;
};

export default function ColorHello({ name, color }: UserProps) {
  return <p style={{ color }}>hello,{name}</p>; // 인라인 방식 -> 잘 사용안함
}
