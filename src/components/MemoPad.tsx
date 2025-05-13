import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  height: 100vh;
  width: 100%;
  font-family: 'Segoe UI', sans-serif;
`;

const LeftPanel = styled.div`
  background-color: #f8f8f8;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightPanel = styled.div`
  padding: 4rem 3rem;
  overflow-y: auto;
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  background-color: #ddd;
`;

const Name = styled.h1`
  font-size: 1.8rem;
  margin-top: 1rem;
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: bold;
  border-bottom: 2px solid #ddd;
  padding-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0.5rem 0;

  a {
    color: #007acc;
    font-weight: bold;
    text-decoration: none;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th, td {
    border: 1px solid #ccc;
    padding: 0.75rem 1rem;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #fafafa;
  }
`;

const MemoPadContainer = styled.div`
  padding: 3rem 5rem;
  background-color: #ffffff;
`;

const IntroSection = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const ProjectTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  padding-left: 0.5rem;
  border-left: 5px solid #4a90e2;
  background-color: #f5f7fa;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const ProjectBlock = styled.div`
  margin-bottom: 4rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  margin-top: 1.5rem;
  font-weight: 600;
  color: #333;
`;


const MemoPad: React.FC = () => {
  return (
    <>
      <Container>
        <LeftPanel>
          <ProfileImage src="" />
          <Name>강경민</Name>
        </LeftPanel>

        <RightPanel>
          <Section>
            <SectionTitle>프로필 소개</SectionTitle>
            <Text>
              배움을 나침반으로 삼는 개발자입니다. 기술 트렌드의 흐름을 학습의 연료로 삼아,
              끊임없는 변화 속에서도 스스로를 향상하기 위해 매일 새롭게 코드를 작성하듯, 지식과 경험을 쌓고 있습니다.
              협력의 가치를 최우선으로 여기며, 다양한 시각을 융합해 혁신을 이끄는 것이 목표입니다.
              기술로 세상을 편리하게 만드는 것뿐만 아니라, 함께 일하는 동료들과의 시너지가 창출하는 가치를 믿기에 이러한 과정 속에서 협력의 중요성을 깨닫고,
              팀워크를 통해 함께 성장하는 경험을 소중히 여기고 있습니다.
            </Text>
          </Section>

          <Section>
            <SectionTitle>기술 스택</SectionTitle>
            <Text>
              JavaScript, React, Dart, Java, Spring Boot, Python, Flutter, Node.js, Express.js,
              MariaDB, YOLOv8, MediaPipe, Raspberry Pi, HTML, TypeScript
            </Text>
          </Section>

          <Section>
            <SectionTitle>Email</SectionTitle>
            <Text>Email : thompson7219@gmail.com</Text>
            <SectionTitle>phoneNumber</SectionTitle>
            <Text>phoneNumber : 010-7102-4549</Text>
            <Text>
              <a href="https://github.com/Thompsonclass" target="_blank" rel="noopener noreferrer">
                GitHub
              </a> |{' '}
              <a href="https://thompsonclass.tistory.com/" target="_blank" rel="noopener noreferrer">
                Blog
              </a>
            </Text>
          </Section>

          <Section>
            <SectionTitle>프로젝트 목록</SectionTitle>
            <StyledTable>
              <thead>
                <tr>
                  <th>프로젝트 명</th>
                  <th>기간</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>응급 드론 시스템</td>
                  <td>2024.03 ~ 2024.07</td>
                  <td>드론을 활용한 응급 환자 지원 시스템</td>
                </tr>
                <tr>
                  <td>제스처 홈 시스템</td>
                  <td>2024.08 ~ 2024.12</td>
                  <td>손동작 인식 기반 스마트 홈 제어</td>
                </tr>
                <tr>
                  <td>OnePointUp</td>
                  <td>2025.03 ~ 2023.07</td>
                  <td>GPT 기반 자기계발 애플리케이션</td>
                </tr>
                <tr>
                  <td>PC 과사용 예방 시스템</td>
                  <td>2025.03 ~ 2023.07</td>
                  <td>노트북 과사용 피로도 측정 및 예방 시스템</td>
                </tr>
                <tr>
                  <td>BGM 웹 플레이리스트</td>
                  <td>2023.08 ~ 2023.12</td>
                  <td>사용자 맞춤형 BGM 재생 웹앱</td>
                </tr>
              </tbody>
            </StyledTable>
          </Section>
        </RightPanel>
      </Container>
      <hr />
      <MemoPadContainer>
        <IntroSection>
          <ProjectBlock>
            <ProjectTitle>응급드론 시스템</ProjectTitle>
            <ProjectGrid>
              <div>
                <Subtitle>소개</Subtitle>
                <Text>
                이 프로젝트는 드론을 활용하여 응급환자의 상태를 실시간으로 모니터링하고 필요한 의료물품을
                신속하게 전달함으로써 골든타임을 확보하고 생존율을 높이는 것을 목표로 하였습니다.
                드론의 빠른 접근성과 기동성을 통해 기존 구급차의 한계를 극복할 수 있음을 알게되었고, 
                기술적으로는 실시간 데이터 전송 및 영상 송수신 시스템을 구현하는 과정에서
                다양한 프로토콜(RTMP 등)을 활용하여 응급 상황에서의 의사소통을 강화하였습니다.
                결과적으로 응급 의료 서비스의 효율성을 크게 향상시킬 수 있었습니다.
                </Text>
                <Subtitle>기간 / 인원</Subtitle>
                <Text>2024년 8월 26일 ~ 12월 29일 <br />
                HW 1인, 지원자 FE, BE 1인, 총 3인 팀 프로젝트        
                </Text>
                <Subtitle>지원자 기여</Subtitle>
                <Text>
                  - 안드로이드 UI 설계 및 로직 구현<br />
                  - RTMP 프로토콜 기반 실시간 영상 송수신 구축
                </Text>
              </div>
              <div>
                <Subtitle>핵심 기능</Subtitle>
                <Text>
                  - 심전도 데이터를 실시간으로 추적.<br />
                  - 환자 영상을 실시간으로 구급대원에게 전송.<br />
                  - 환자 상태 데이터를 병원으로 신속하게 전송.
                </Text>
                <Subtitle>팀 성과</Subtitle>
                <Text>
                  - 실시간 환자 모니터링 시스템 구현<br />
                  - 응급의료 골든타임 확보 가능성 제시<br />
                  - 실시간 영상 송수신 + 데이터 시각화 동시 구현
                </Text>
                <Subtitle>세부 내용</Subtitle>
                <Text>
                - 사용자 중심 안드로이드 앱 UI 설계 및 주요 기능 로직 구현 <br />
                - RTMP 기반 실시간 영상 송수신 시스템 구축<br />
                - 웹 프론트엔드 개발 및 데이터 시각화 기반 웹 인터페이스 개발<br />
                - 안드로이드 WebView에서 HTTP 요청 시 "net::ERR_CLEARTEXT_NOT_PERMITTED" 오류 발생 → 네트워크 보안 설정 적용하여 문제 해결    <br />
                </Text>
              </div>
            </ProjectGrid>
          </ProjectBlock>
          <hr />
          <ProjectBlock>
            <ProjectTitle>제스처 홈 시스템</ProjectTitle>
            <ProjectGrid>
              <div>
                <Subtitle>소개</Subtitle>
                <Text>
                이 프로젝트는 손동작 제스처 인식 기술을 활용하여 스마트 홈 기기를 비접촉 방식으로 제어하는 시스템을 개발하는 것이 목표였습니다.<br />
                기존의 비효율적이고 비위생적인 터치스크린 방식을 개선하고, 손동작만으로 조작 가능한 스마트 환경을 제공하고자 했습니다.
                YOLOv8 기반의 손동작 인식 기술을 사용해 라즈베리파이 카메라로 실시간으로 손동작을 감지하고, 이를 통해 스마트 기기들을 직관적으로 제어할 수 있었습니다.
                이를 통해 효율적이고 사용하기 쉬운 스마트 홈 시스템을 구현할 수 있었고, 위생적인 환경을 제공할 수 있었습니다.
                </Text>
                <Subtitle>기간 / 인원</Subtitle>
                <Text>2024년 8월 28일 ~ 12월 19일 <br />
                HW 1인, 지원자 AI모델 개발, 모듈 로직 설계 1인, 총 3인 팀 프로젝트        
                </Text>
                <Subtitle>지원자 기여</Subtitle>
                <Text>
                  - 특정 손동작 인식 기반 Yolov8s 모델 학습 및 개발<br />
                  - 스마트 홈 제어 시스템 모듈 로직 설계<br />
                </Text>
              </div>
              <div>
                <Subtitle>핵심 기능</Subtitle>
                <Text>
                - 손동작을 실시간으로 인식하여 스마트 홈 기기(LED, 선풍기, 서보 모터 등)를 비접촉 방식으로 제어.<br />
                - 실시간 카메라를 활용해 제스처 데이터를 분석 및 처리.<br />
                - 사용자에게 직관적인 피드백을 제공하여 스마트 홈 환경의 편의성 향상.<br />   
                </Text>
                <Subtitle>팀 성과</Subtitle>
                <Text>
                - 손동작 제스처 인식 기반 스마트 홈 제어 시스템 구현<br />
                - 실시간 손동작 인식 및 스마트 기기 제어 기능 구현<br />
                - 사용자 인터페이스와 시각적 피드백 제공 시스템 개발<br />  
                </Text>
                <Subtitle>세부 내용</Subtitle>
                <Text>
                - 손동작을 인식하여 LED, 서보모터, 선풍기 등의 스마트 기기를 제어할 수 있도록 모듈 로직을 설계하고 구현<br />
                - YOLO 모델을 활용한 손동작 인식 후, 각 동작에 맞는 스마트 기기 제어 로직을 개발<br />
                - Raspberry Pi의 GPIO 핀을 이용해 하드웨어 장치(LED, 서보모터, 선풍기 등)를 제어하는 로직 구현<br />
                </Text>
              </div>
            </ProjectGrid>
          </ProjectBlock>
          <hr />
          <ProjectBlock>
            <ProjectTitle>OnePointUp</ProjectTitle>
            <ProjectGrid>
              <div>
                <Subtitle>소개</Subtitle>
                <Text>
                이 프로젝트는 사용자가 설정한 목표를 기반으로 GPT-4가 맞춤형 계획을 자동으로 생성하고, 
                Flutter 앱에 실시간으로 연동하여 목표 달성을 지원하는 시스템을 개발하는 것을 목표로 하였습니다. 
                이를 위해 GPT-4 API와 Spring Boot를 기반으로 한 백엔드 시스템을 구축하고, 
                Flutter 앱을 통해 실시간으로 데이터를 연동하여 사용자가 지속적으로 피드백을 제공할 수 있도록 구현하였습니다. 
                기술적으로는 GPT-4를 활용한 데이터 분석 및 계획 생성을 최적화하며,
                Flutter의 실시간 UI 업데이트와 상호작용 기능을 강화하여 사용자의 목표 달성에 도움이 되는 시스템을 완성하였습니다.
                </Text>
                <Subtitle>기간 / 인원</Subtitle>
                <Text>2025년 3월 04일 ~ 6월 25일 <br />
                지원자 FE, BE 1인, FM 1인, 총 3인 팀 프로젝트
                </Text>
                <Subtitle>지원자 기여</Subtitle>
                <Text>
                  - 특정 손동작 인식 기반 Yolov8s 모델 학습 및 개발<br />
                  - 스마트 홈 제어 시스템 모듈 로직 설계<br />
                </Text>
              </div>
              <div>
                <Subtitle>핵심 기능</Subtitle>
                <Text>
                - 사용자가 설정한 목표와 세부 데이터를 입력받고 저장하는 기능<br />
                - GPT-4 API를 통한 맞춤형 계획 생성 및 데이터베이스 저장<br />
                - Flutter 앱과 자동 연동되어 실시간 계획 제공 및 피드백 반영 기능<br />    
                </Text>
                <Subtitle>팀 성과</Subtitle>
                <Text>
                - GPT-4 API 연동을 통해 사용자 맞춤형 계획 생성 성공<br />
                - Spring Boot 기반 REST API 서버 및 MariaDB 연동 시스템 구축<br />
                - Flutter 앱과 백엔드를 실시간으로 연결하여 사용자 경험 최적화<br /> 
                </Text>
                <Subtitle>세부 내용</Subtitle>
                <Text>
                - 사용자 목표 설정 및 JSON 포맷 데이터 구조 설계 및 저장 API 개발<br />
                - GPT-4에 전달할 프롬프트 템플릿 작성 및 최적화, API 호출 및 응답 처리 구현<br />
                - 사용자 피드백 기반 계획 재생성 로직 개발 및 Flutter UI 자동 업데이트 지원<br />
                </Text>
              </div>
            </ProjectGrid>
          </ProjectBlock>
          <hr />
          <ProjectBlock>
            <ProjectTitle>PC 과사용 예방 시스템</ProjectTitle>
            <ProjectGrid>
              <div>
                <Subtitle>소개</Subtitle>
                <Text>
                이 프로젝트는 노트북 사용자의 눈 깜빡임, 시선 고정 시간, 그리고 웹캠과 사용자 간 거리를 실시간으로 분석하여 피로도를 측정하고,
                피로도가 일정 수준 이상이 되거나 올바르지 않은 사용 환경이 감지될 때 경고를 발생시켜 사용자의 건강을 보호하는 것을 목표로 하였습니다.
                YOLOv8m과 MediaPipe, OpenCV 등의 다양한 영상 처리 기술을 활용하여 실시간 분석 기능을 구현했으며,
                사용자 편의를 고려한 경고 시스템을 설계하는 과정에서 팀원들과의 긴밀한 협업을 통해 문제 해결 능력과 기술적 깊이를 키울 수 있었습니다.
                </Text>
                <Subtitle>기간 / 인원</Subtitle>
                <Text>2025년 3월 04일 ~ 6월 25일 <br />
                지원자 AI 모델, 영상 처리 1인, 총 2인 팀 프로젝트
                </Text>
                <Subtitle>지원자 기여</Subtitle>
                <Text>
                - YOLOv8m 기반 얼굴 피로도 분석 모델 파인튜닝 및 최적화<br />
                </Text>
              </div>
              <div>
                <Subtitle>핵심 기능</Subtitle>
                <Text>
                - 사용자의 눈 깜빡임 횟수 실시간 측정 및 분석<br />
                - 웹캠과 사용자 간 거리 측정해 거리 이상 시 즉각 경고 알림<br />
                - 피로도 점수 계산 및 과도한 피로 분석 기능<br />
                </Text>
                <Subtitle>팀 성과</Subtitle>
                <Text>
                - YOLOv8m을 활용한 얼굴 및 눈 깜밖임 인식 모델 구축<br />
                - 실시간 거리 측정 및 거리 기반 경고 시스템 구축<br />
                - 피로도 점수 기반 분석 시스템 구축<br />
                </Text>
                <Subtitle>세부 내용</Subtitle>
                <Text>
                - 눈 깜빡임 횟수, 거리 기반반 데이터를 기반으로 피로도를 점수화하는 알고리즘 설계 및 구현<br />
                - 얼굴의 크기 및 위치를 기반으로 웹캠과 사용자의 거리를 계산하고, 30cm 이하일 경우 경고 시스템 작동<br />
                - YOLOv8m, MediaPipe 결과를 종합하여 프레임 단위로 실시간 데이터 분석<br />
                - 피로도나 거리 이상 발생 시 팝업 알림으로 사용자에게 즉각적인 휴식 및 자세 교정을 유도<br />
                </Text>
              </div>
            </ProjectGrid>
          </ProjectBlock>
          <hr />
          <ProjectBlock>
            <ProjectTitle>BGM 웹 플레이 리스트</ProjectTitle>
            <ProjectGrid>
              <div>
                <Subtitle>소개</Subtitle>
                <Text>
                이 프로젝트는 사용자가 원하는 배경음악(BGM)을 자유롭게 추가, 재생 및 관리할 수 있도록
                하는 웹 기반 플레이리스트 시스템을 개발하는 것을 목표로 하였습니다.
                이를 위해 React를 기반으로 한 직관적인 UI를 설계하고, Node.js와 Express.js를 활용하여 백엔드에서 
                사용자 데이터를 안정적으로 처리할 수 있도록 구현하였습니다.
                기술적으로는 오디오 재생 기능을 최적화하기 위해 HTML5 Audio API를 활용하였으며, 
                사용자 경험을 개선하기 위해 볼륨 조절, 재생/일시정지, 플레이리스트 추가/삭제 기능을 포함하여 음악 관리의 편의성을 극대화하였습니다.
                </Text>
                <Subtitle>기간 / 인원</Subtitle>
                <Text>2023년 8월 28일 ~ 12월 19일 <br />
                FE 2인, 지원자 BE, 총 3인 팀 프로젝트
                </Text>
                <Subtitle>지원자 기여</Subtitle>
                <Text>
                - 오디오 재생 및 플레이리스트 관리 기능 구현<br />
                - 백엔드 API 설계 및 데이터 연동                
                </Text>
              </div>
              <div>
                <Subtitle>핵심 기능</Subtitle>
                <Text>
                - 사용자가 원하는 BGM을 등록하고 플레이리스트 생성<br />
                - HTML5 Audio API를 활용한 오디오 재생 및 제어(재생/정지/볼륨 조절 등)<br />
                - 즐겨 찾는 플레이리스트 데이터의 서버 저장 및 관리 기능 구현
                </Text>
                <Subtitle>팀 성과</Subtitle>
                <Text>
                - React 기반 직관적인 웹 UI설계 및 구현<br />
                - Node.js + Express.js 백엔드 구축 및 API 개발<br />
                - 음악 데이터 스트리밍 최적화 및 CORS 문제 해결
                </Text>
                <Subtitle>세부 내용</Subtitle>
                <Text>
                - HTML5 Audio API를 활용하여 음악 재생, 볼륨 조절, 플레이리스트 추가/삭제 기능 개발<br />
                - Node.js와 Express.js를 사용하여 사용자별 플레이리스트 데이터 저장 및 관리 기능 구축<br />
                - 프론트엔드와 백엔드 간 HTTP 요청 시 발생하는 CORS 정책 문제를 해결하여 원활한 데이터 통신 보장
                </Text>
              </div>
            </ProjectGrid>
          </ProjectBlock>
        </IntroSection>
      </MemoPadContainer>
    </>
  );
};

export default MemoPad;
