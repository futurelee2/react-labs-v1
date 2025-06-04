import "./App.css"; // 전역??
import Counter from "./labs/03-state-events/Counter";
// import LiveShowInput from "./code-live/03-state-events/LiveShowInput";
// import Button from "./labs/02-props/Button";
// import UserList from "./labs/02-props/UserList";
// import Wrapper from "./labs/02-props/Wrapper";
// import Button from "./code-live/02-props/Button";
// import Card from "./code-live/02-props/Card";
// import UserList from "./code-live/02-props/UserList";

function App() {
  //   function handClick() {
  //     alert("버튼클릭됨");
  //   }

  return (
    <>
      {/* <Card title="새싹카드" children={<h1>???</h1>} /> */}
      {/* <Card title="새싹카드">
      <h1>children</h1>
      </Card> */}
      {/* <Button label="버튼" onClick={handClick} /> */}
      {/* <Button label="버튼" onClick={() => alert("ㅎㅇ")} /> */}
      {/* <UserList /> */}
      {/* <Wrapper>children</Wrapper> */}
      {/* <Button onClick={() => alert("ㅎㅇ")} /> */}
      <Counter></Counter>
    </>
  );
}

export default App;
