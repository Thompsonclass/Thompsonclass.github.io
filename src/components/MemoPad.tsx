import React, { useState } from "react";
import TodoItem from "./TodoItem"

type MemoPad = {
  task: string; //name이라는 문자열 타입의 props
}
const MemoPad: React.FC = () => {
//React.FC: 리액트 컴포넌트 타입을 나타냄.

  const message = "hello";
  console.log(message);

  const message1: string = "hello2";
  console.log(message1);
  //message: string은 message가 문자열 타입임을 명시.

  let age: number = 25; //정수
  let name1: string = "JOHN"; //문자열
  let isOnline: boolean = true; //논리
  let numbers: number[] = [1,2,3]; // 정수 배열
  let person: {name : string; age : number} = { name: "Alice", age: 30}; // 문자 배열
  function add(a: number, b: number): number { 
    return a + b;
  }; // 함수

  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem  key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default MemoPad;

