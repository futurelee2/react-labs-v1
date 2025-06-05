type User = {
  id: number;
  name: string;
};

type UserProps = {
  user: User;
};

export default function UserItem({ user }: UserProps) {}
