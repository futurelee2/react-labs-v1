interface user {
  nickname?: string;
}

export default function Welcome({ nickname }: user) {
  if (!nickname) {
    return <p>방문자님, 환영합니다!</p>;
  } else {
    return <p>환영합니다, {nickname}님</p>;
  }
}
