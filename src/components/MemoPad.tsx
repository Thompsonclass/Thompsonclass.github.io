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
        <h1>응급드론 시스템</h1>
        <h4>
          이 프로젝트는 드론을 활용하여 응급환자의 상태를 실시간으로 모니터링하고 필요한 의료물품을 신속하게 전달함으로써 골든타임을 확보하고 생존율을 높이는 것을 목표로 하였습니다.<br />
          프로젝트 초기 단계에서는 응급 서비스의 중요성을 깊이 이해하게 되었고, 특히 중증 응급환자의 치료에 있어 시간의 중요성을 깨달았습니다. 드론의 빠른 접근성과 기동성을 통해 기존 구급차의 한계를 극복할 수 있음을 경험하였습니다.<br />
          기술적으로는 실시간 데이터 전송 및 영상 송수신 시스템을 구현하는 과정에서 다양한 프로토콜(RTMP 등)을 활용하여 응급 상황에서의 의사소통을 강화하였습니다. 이 과정에서 팀원들과의 협업을 통해 문제 해결 능력과 기술적 이해도를 높일 수 있었으며,
          결과적으로 응급 의료 서비스의 효율성을 크게 향상시킬 수 있었습니다.<br />
          이 프로젝트는 저에게 기술적 도전뿐만 아니라, 실제 환자에게 긍정적인 영향을 미치는 시스템을 개발하는 보람을 느끼게 해준 중요한 경험이었습니다.<br />
        </h4>
        <hr />
        <h1>소개</h1>
        <h4>
          드론을 활용하여 응급환자의 상태를 실시간으로 모니터링하고 필요한 의료물품을 신속하게 전달함으로써 골든타임을 확보하고 생존율을 높이는 것을 목표
        </h4>
        <h1>기간/인원</h1>
        <h4>
          8월 26일 ~ 12월 29일 / HW 1인, 지원자 FE, BE 1인, 총 3인 팀 프로젝트        
        </h4>
        <h1>핵심 기능</h1>
        <h4>
        - 심전도 데이터를 실시간으로 추적.<br />
        - 환자 영상을 실시간으로 의료진에게 전송.<br />
        - 환자 상태 데이터를 병원으로 신속하게 전송.<br />        
        </h4>
        <h1>팀 성과</h1>
        <h4>
        - 필요한 의료물품을 신속하게 전달하는 드론 시스템 구현<br />
        - 실시간 환자 영상 모니터링 기능 구현<br />
        - 심전도 추척 그래프 기능 구현  <br />     
        </h4>
        <h1>지원자 개인 기여</h1>
        <h4>
        - 안드로이드 UI 설계 및 로직 구현<br />
        - RTMP 프로토콜 기반 실시간 영상 송수신 구축<br />
        - Web FE 개발 및 데이터 시각화    <br />
        </h4>
        <h1>세부 내용</h1>
        <h4>
        - 안드로이드 UI 설계 및 로직 구현: 사용자 중심 안드로이드 앱 UI 설계 및 주요 기능 로직 구현 <br />
        - RTMP 프로토콜 기반 실시간 영상 송수신 구축: RTMP 기반 실시간 영상 송수신 시스템 구축<br />
        - Web FE 개발 및 데이터 시각화: 웹 프론트엔드 개발 및 데이터 시각화 기반 웹 인터페이스 개발<br />
        - HTTP 통신 제한 문제 해결: 안드로이드 WebView에서 HTTP 요청 시 "net::ERR_CLEARTEXT_NOT_PERMITTED" 오류 발생 → 네트워크 보안 설정 적용하여 문제 해결    <br />
        </h4>
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