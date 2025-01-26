import React, { useState } from "react";

// MemoPad 컴포넌트 정의
const MemoPad: React.FC = () => {
  // 상태 선언: 메모 내용은 문자열로 지정
  const [text, setText] = useState<string>("");

  // 메모 내용 입력을 처리하는 함수
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value); // 텍스트를 상태로 업데이트
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📝 Simple Memo Pad</h1>
      <textarea
        style={{
          width: "100%",
          height: "200px",
          padding: "10px",
          fontSize: "16px",
        }}
        placeholder="Type your memo here..."
        value={text} // 상태에 저장된 텍스트를 출력
        onChange={handleTextChange} // 텍스트가 변경되면 상태 업데이트
      />
      <button
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => alert(`Your Memo:\n\n${text}`)} // 버튼 클릭 시 메모 내용을 알림으로 표시
      >
        Save Memo
      </button>
    </div>
  );
};

export default MemoPad;
