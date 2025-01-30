import React from "react";

type TodoItemProps = {
  task: string; // 할 일 내용
};


const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  return <li>{task}</li>;
};

export default TodoItem;