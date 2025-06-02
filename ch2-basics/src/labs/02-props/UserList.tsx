const users = [
  { id: 1, name: "ㅇㅁㄹ" },
  { id: 2, name: "ㅇㅇㅇ" },
  { id: 3, name: "ㅁㅁㅁ" },
];

export default function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
