import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // createRoot를 import 해야 합니다.
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* 추가적인 라우트가 필요하다면 여기에 추가 */}
      </Routes>
    </Router>
  </StrictMode>
);
