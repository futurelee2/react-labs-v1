function Hello() {
  // 컴포넌트임
  return <div>hello!!</div>;
}

export default function HelloBox() {
  return (
    <>
      {/*  위 컴포넌트 안에서 사용 가능 , HelloBox 만 외부에서 사용가능하게 됨*/}
      <Hello />
    </>
  );
}
