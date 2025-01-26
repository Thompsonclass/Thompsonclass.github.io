import React from "react";
import MemoPad from "./components/MemoPad"; // MemoPad 컴포넌트를 불러옵니다.

// App 컴포넌트는 특별히 props가 없기 때문에 React.FC를 사용
const App: React.FC = () => {
  return (
    <div>
      <MemoPad />
    </div>
  );
};

export default App;
