import React, { useState } from "react";
import styled from "styled-components";
import MemoItem from "./MemoItem";

const MemoPadContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  margin: 20px;
`;

const IntroSection = styled.section`
  background-color: #ffffff;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  text-align: left;
  margin-bottom: 40px;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const TaskInputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const TaskInput = styled.input`
  width: 60%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaskList = styled.ul`
  padding: 5px;
  margin: 5px;
`;

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
    <MemoPadContainer>
      {/* 소개 섹션 */}
      <IntroSection>
        <Title>개발자 포트폴리오</Title>
        <Section>
        <h1>응급드론 시스템</h1>
          이 프로젝트는 드론을 활용하여 응급환자의 상태를 실시간으로 모니터링하고 필요한 의료물품을 신속하게 전달함으로써 골든타임을 확보하고 생존율을 높이는 것을 목표로 하였습니다.
          프로젝트 초기 단계에서는 응급 서비스의 중요성을 깊이 이해하게 되었고, 특히 중증 응급환자의 치료에 있어 시간의 중요성을 깨달았습니다. 드론의 빠른 접근성과 기동성을 통해 기존 구급차의 한계를 극복할 수 있음을 경험하였습니다.
          기술적으로는 실시간 데이터 전송 및 영상 송수신 시스템을 구현하는 과정에서 다양한 프로토콜(RTMP 등)을 활용하여 응급 상황에서의 의사소통을 강화하였습니다. 이 과정에서 팀원들과의 협업을 통해 문제 해결 능력과 기술적 이해도를 높일 수 있었으며,
          결과적으로 응급 의료 서비스의 효율성을 크게 향상시킬 수 있었습니다.
          이 프로젝트는 저에게 기술적 도전뿐만 아니라, 실제 환자에게 긍정적인 영향을 미치는 시스템을 개발하는 보람을 느끼게 해준 중요한 경험이었습니다.<br />
        </Section>
        <hr />
        <h1>소개</h1>
        <Section>
          드론을 활용하여 응급환자의 상태를 실시간으로 모니터링하고 필요한 의료물품을 신속하게 전달함으로써 골든타임을 확보하고 생존율을 높이는 것을 목표
        </Section>
        <h1>기간/인원</h1>
        <Section>
          8월 26일 ~ 12월 29일 / HW 1인, 지원자 FE, BE 1인, 총 3인 팀 프로젝트        
        </Section>
        <h1>핵심 기능</h1>
        <Section>
        - 심전도 데이터를 실시간으로 추적.<br />
        - 환자 영상을 실시간으로 의료진에게 전송.<br />
        - 환자 상태 데이터를 병원으로 신속하게 전송.<br />        
        </Section>
        <h1>팀 성과</h1>
        <Section>
        - 필요한 의료물품을 신속하게 전달하는 드론 시스템 구현<br />
        - 실시간 환자 영상 모니터링 기능 구현<br />
        - 심전도 추척 그래프 기능 구현  <br />     
        </Section>
        <h1>지원자 개인 기여</h1>
        <Section>
        - 안드로이드 UI 설계 및 로직 구현<br />
        - RTMP 프로토콜 기반 실시간 영상 송수신 구축<br />
        - Web FE 개발 및 데이터 시각화    <br />
        </Section>
        <h1>세부 내용</h1>
        <Section>
        - 안드로이드 UI 설계 및 로직 구현: 사용자 중심 안드로이드 앱 UI 설계 및 주요 기능 로직 구현 <br />
        - RTMP 프로토콜 기반 실시간 영상 송수신 구축: RTMP 기반 실시간 영상 송수신 시스템 구축<br />
        - Web FE 개발 및 데이터 시각화: 웹 프론트엔드 개발 및 데이터 시각화 기반 웹 인터페이스 개발<br />
        - HTTP 통신 제한 문제 해결: 안드로이드 WebView에서 HTTP 요청 시 "net::ERR_CLEARTEXT_NOT_PERMITTED" 오류 발생 → 네트워크 보안 설정 적용하여 문제 해결    <br />
        </Section>
        <hr />
        <h1>제스처 홈 시스템</h1>
        <Section>
        이 프로젝트는 손동작 제스처 인식 기술을 활용하여 스마트 홈 기기를 비접촉 방식으로 제어하는 시스템을 개발하는 것이 목표였습니다.<br />
        기존의 비효율적이고 비위생적인 터치스크린 방식을 개선하고, 손동작만으로 조작 가능한 스마트 환경을 제공하고자 했습니다.
        YOLOv8 기반의 손동작 인식 기술을 사용해 라즈베리파이 카메라로 실시간으로 손동작을 감지하고, 이를 통해 스마트 기기들을 직관적으로 제어할 수 있었습니다.
        이를 통해 효율적이고 사용하기 쉬운 스마트 홈 시스템을 구현할 수 있었고, 위생적인 환경을 제공할 수 있었습니다.
        이번 프로젝트는 기술적 도전뿐만 아니라 실용적인 스마트 홈 시스템 개발에 큰 의미를 느끼게 해준 경험이었습니다.
        </Section>
        <hr />
        <h1>소개</h1>
        <Section>
        제스처 홈 시스템은 손동작 인식 기술을 활용하여 스마트 홈 기기를 비접촉 방식으로 직관적이고 편리하게 제어할 수 있도록 하는 프로젝트입니다        </Section>
        <h1>기간/인원</h1>
        <Section>
          2024년 8월 28일 ~ 12월 19일 / HW 1인, AI모델 개발, 지원자 모듈 로직 설계, 총 3인 팀 프로젝트        
        </Section>
        <h1>핵심 기능</h1>
        <Section>
        - 손동작을 실시간으로 인식하여 스마트 홈 기기(LED, 선풍기, 서보 모터 등)를 비접촉 방식으로 제어.<br />
        - 실시간 카메라를 활용해 제스처 데이터를 분석 및 처리.<br />
        - 사용자에게 직관적인 피드백을 제공하여 스마트 홈 환경의 편의성 향상.<br />     
        </Section>
        <h1>팀 성과</h1>
        <Section>
        - 손동작 제스처 인식 기반 스마트 홈 제어 시스템 구현<br />
        - 실시간 손동작 인식 및 스마트 기기 제어 기능 구현<br />
        - 사용자 인터페이스와 시각적 피드백 제공 시스템 개발<br />  
        </Section>
        <h1>지원자 개인 기여</h1>
        <Section>
        - 스마트 홈 제어 시스템 모듈 로직 설계 및 구현<br />
        - 손동작 인식 기반 제어 로직 개발 (LED, 서보모터, 선풍기 등)<br />
        </Section>
        <h1>세부 내용</h1>
        <Section>
        - 스마트 홈 제어 시스템 모듈 로직 설계 및 구현: 손동작을 인식하여 LED, 서보모터, 선풍기 등의 스마트 기기를 제어할 수 있도록 모듈 로직을 설계하고 구현<br />
        - 손동작 인식 기반 제어 로직 개발 (LED, 서보모터, 선풍기 등): YOLO 모델을 활용한 손동작 인식 후, 각 동작에 맞는 스마트 기기 제어 로직을 개발<br />
        - GPIO 및 PWM 제어 구현: Raspberry Pi의 GPIO 핀을 이용해 하드웨어 장치(LED, 서보모터, 선풍기 등)를 제어하는 로직 구현<br />
        </Section>
        <hr />
        <h1>BGM 웹 플레이 리스트</h1>
        <Section>
        이 프로젝트는 사용자가 원하는 배경음악(BGM)을 자유롭게 추가, 재생 및 관리할 수 있도록 하는 웹 기반 플레이리스트 시스템을 개발하는 것을 목표로 하였습니다.<br />
        프로젝트를 진행하며 단순한 음악 재생 기능을 넘어, 사용자가 선호하는 음악을 쉽게 저장하고 관리할 수 있는 기능이 중요하다는 것을 깨달았습니다. 이를 위해 React를 기반으로 한 직관적인 UI를 설계하고, Node.js와 Express.js를 활용하여 백엔드에서 사용자 데이터를 안정적으로 처리할 수 있도록 구현하였습니다.
        기술적으로는 오디오 재생 기능을 최적화하기 위해 HTML5 Audio API를 활용하였으며, CORS 정책을 고려한 서버 설정과 데이터 전송 최적화에도 집중하였습니다. 또한, 사용자 경험을 개선하기 위해 볼륨 조절, 재생/일시정지, 플레이리스트 추가/삭제 기능을 포함하여 음악 관리의 편의성을 극대화하였습니다.
        이 프로젝트를 통해 프론트엔드와 백엔드 간의 효율적인 데이터 흐름을 설계하는 법을 익히고, 음악 스트리밍과 관련된 다양한 기술적 도전에 대응하는 경험을 쌓을 수 있었습니다. 단순한 BGM 플레이어가 아닌, 사용자 맞춤형 음악 관리 시스템을 구축하면서 개발자로서의 성장과 보람을 느낄 수 있었습니다.
        </Section>
        <hr />
        <h1>소개</h1>
        <Section>
        React와 Node.js를 활용하여 사용자가 자유롭게 음악을 추가, 재생, 일시정지할 수 있는 플레이리스트 시스템을 구축하였으며, 직관적인 UI와 원활한 오디오 컨트롤을 통해 최적의 사용자 경험을 제공하는 것을 목표로 하였습니다.
       </Section>
        <h1>기간/인원</h1>
        <Section>
          2023년 8월 28일 ~ 12월 19일 / FE 2인, 지원자 BE, 총 3인 팀 프로젝트
        </Section>
        <h1>핵심 기능</h1>
        <Section>
        - 사용자가 원하는 BGM을 등록하고 플레이리스트 생성<br />
        - HTML5 Audio API를 활용한 오디오 재생 및 제어(재생/정지/볼륨 조절 등)<br />
        - 플레이리스트 데이터의 서버 저장 및 관리 기능 구현
        </Section>
        <h1>팀 성과</h1>
        <Section>
        - React 기반 직관적인 웹 UI설계 및 구현<br />
        - Node.js + Express.js 백엔드 구축 및 API 개발<br />
        - 음악 데이터 스트리밍 최적화 및 CORS 문제 해결
       </Section>
        <h1>지원자 개인 기여</h1>
        <Section>
        - 오디오 재생 및 플레이리스트 관리 기능 구현<br />
        - 백엔드 API 설계 및 데이터 연동
       </Section>
        <h1>세부 내용</h1>
        <Section>
        - 오디오 재생 및 플레이리스트 관리 기능 구현: HTML5 Audio API를 활용하여 음악 재생, 볼륨 조절, 플레이리스트 추가/삭제 기능 개발<br />
        - 백엔드 API 설계 및 데이터 연동: Node.js와 Express.js를 사용하여 사용자별 플레이리스트 데이터 저장 및 관리 기능 구축<br />
        - CORS 문제 해결: 프론트엔드와 백엔드 간 HTTP 요청 시 발생하는 CORS 정책 문제를 해결하여 원활한 데이터 통신 보장
        </Section>
        <hr />
        <a href="https://github.com/Thompsonclass" target="_blank" rel="noopener noreferrer">
          GitHub 프로필 보기
        </a>
      </IntroSection>

      <IntroSection>
        <Title>메모</Title>
        <TaskInputContainer>
          <TaskInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="할 일을 입력하세요"
          />
          <AddButton onClick={addTask}>추가</AddButton>
        </TaskInputContainer>
        <TaskList>
          {tasks.map((task, index) => (
            <MemoItem task={task} index={index} onDelete={deleteTask} key={index} />
          ))}
        </TaskList>
      </IntroSection>
    </MemoPadContainer>
  );
};

export default MemoPad;
