type btn = {
  onClick: () => void;
};
export default function Button({ onClick }: btn) {
  return <button onClick={onClick}>버튼</button>;
}
