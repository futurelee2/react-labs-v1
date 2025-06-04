import styles from "./Greeting.module.css";

interface User {
  name: string;
}

interface User2 {
  name: string;
  age: number;
}

interface User3 {
  name: string;
  age?: number;
}

//props = 객체
//예제 1
// export default function Greeting(user: User) {
//   return <p>안녕하세요, {user.name}님!</p>;
// } //  동적 컴포넌트임

//App.tsx 호출 시, <Greeting name="미래" />

//예제 2 - 구조분해할당
// export default function Greeting2({ name, age }: User2) {
//   return (
//     <p>
//       안녕하세요, {name}({age})님.
//     </p>
//   );
// }

//예제 3
export default function Greeting3({ name, age }: User3) {
  //  조건부 렌더링
  //(1) if문
  //   if (!age) {
  //     return (
  //       <p>
  //         안녕하세요, {name}({age})님.
  //       </p>
  //     );
  //   } else
  //     <p>
  //       안녕하세요, {name}({age})님.
  //     </p>;
  // }
  //(2) 삼항 연산자
  //   return (
  //     <p>
  //       안녕하세요, {name}
  //       {age !== undefined ? `${age}` : ""}
  //     </p>
  //   );
  // }

  //(3) && 연산자 (AND)
  // t & t -> True
  // f && (???) -> f (앞에가 false 이면 뒤에는 실행안됨. 앞 t -> 뒤 체크함)
  return (
    <p className={styles.hello}>
      안녕하세요, {name}
      {/* 아래코드는 && 앞 조건이 참이면 &&뒤에 age를 출력해라는 뜻 */}
      {age !== undefined && `(${age})`}
    </p>
  );
}
