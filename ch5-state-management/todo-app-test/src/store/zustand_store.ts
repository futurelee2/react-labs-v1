import { create } from "zustand";

export interface Todo {
  id: number;
  text: string;
}

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
}

// 구조 외우기
// set(state) => ({})
// set(state) => {return {}}

// set = 상태 업데이트 하는 기능
// state = create()안에 정의했던 모든 속성을 담고 있는 현재 상태를 말함.
export const useTodoStore = create<TodoState>((set) => ({
  todos: [
    { id: 1, text: "리액트 공부" },
    { id: 2, text: "스프링 공부하기" },
    { id: 3, text: "스쿼트 100개 하기" },
  ],
  addTodo: (text) =>
    set((state) => ({ todos: [...state.todos, { id: Date.now(), text }] })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id != id),
    })),
}));
