const users = [
  { id: 1, name: "이유저" },
  { id: 2, name: "김유저" },
  { id: 3, name: "박유저" },
];
export default function UserList() {
  return (
    <ul>
      {/* <li>{users[0].name}</li>
      <li>{users[0].name}</li>
      <li>{users[0].name}</li> */}
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      {/* map 은 반환값 줌. forEach는 반환값 없음..? */}
      {/* li 사용 시에 key = {} 반드시 넣어줘함. 돌아가긴하지만, 성능적 저하 없기 위해서는 넣어줘야함 */}
    </ul>
  );
}
