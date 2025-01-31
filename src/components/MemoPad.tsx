import React, { useState } from "react";
import "./MemoPad.css"; // CSS 파일 import

const MemoPad: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="memopad-container">
      {/* 소개 섹션 */}
      <section className="memopad-intro">
        <h1>드론</h1>
        <hr />
        <h1>스마트 홈</h1>
        <hr />
        <h1>웹</h1>
        <hr />
        <a href="https://github.com/Thompsonclass" target="_blank" rel="noopener noreferrer">
          GitHub 프로필 보기
        </a>
      </section>

      {/* Todo List 섹션 */}
      <section className="todo-section">
        <h2>메모</h2>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task"
          />
          <button onClick={addTask}>추가</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span>{task}</span>
              <button onClick={() => deleteTask(index)} className="delete-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MemoPad;