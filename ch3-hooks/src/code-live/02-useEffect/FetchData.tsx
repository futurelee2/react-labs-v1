import { useEffect, useState } from "react";

type Todo = {
  id: number;
  userId: number;
  completed: boolean;
  title: string;
};

export default function FetchData() {
  //https://jsonplaceholder.typicode.com/todos/1 // 테스트할때 유용하게 쓰이는 사이트
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json()) // fetch 프로미스 반환. json 프로미스 반환
      .then((data) => setTodo(data));
  }, []);

  // 데이터를 불러올 때 :"로딩중.."표시
  return (
    <div>
      {todo ? (
        <ul>
          <li> id: {todo?.id}</li>
          <li> title: {todo?.title}</li>
        </ul>
      ) : (
        <p>로딩중...</p>
      )}
    </div>
  );
}

// ? :  옵셔널 체이닝
