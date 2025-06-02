// 1. **숫자 변수 선언**

export default function Expression() {
  const a = 5;
  const b = 3;
  function Add(x: number, y: number): number {
    return x + y;
  }
  return (
    <>
      <h2>a = {a}</h2>
      <h2>b = {b}</h2>
      <h2>a + b = {Add(a, b)}</h2>
      <h2>Add(a,b) = {Add(a, b)}</h2>
    </>
  );
}
