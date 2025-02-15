import React, { useState } from "react";
import "../css/MemoPad.css"; // CSS 파일 import
import MemoItem from "./MemoItem";

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
      <h1>지식의 경계를 넓히는 개발자</h1>
      <h2>무지보다는 배움이라는 길을 걷는 것을 좋아합니다. <br />
          새로운 기술을 익히고 이를 통해 보다 나은 결과를 만들어내기 위해 팀원들과 협력하고 있습니다.<br />
          도전에 대한 두려움이 없으며, 이를 통해 저 자신의 한계를 확장하는 데 집중하고 있습니다. <br />
          끊임없이 변화하는 기술 트렌드 속에서 제 기술적 역량을 키우고, 문제를 해결하는 데 필요한 지식을 쌓아가는 것이 목표입니다.<br />
          저는 항상 새로운 것을 배우고, 이를 실무에 적용하여 더 나은 개발자로 성장하는 여정을 이어가고자 합니다. <br />
          이러한 과정 속에서 협력의 중요성을 깨닫고, 팀워크를 통해 함께 성장하는 경험을 소중히 여기고 있습니다.</h2>
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
            <MemoItem task={task} index={index} onDelete={deleteTask} key={index} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MemoPad;