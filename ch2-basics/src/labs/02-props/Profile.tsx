interface user {
  name: string;
  age: number;
}

export default function Profile({ name, age }: user) {
  return (
    <p>
      {name}
      {age}
    </p>
  );
}
