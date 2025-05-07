import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Homepage.jsx';
import Download from './components/Download.jsx';

function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const scaleSite = () => {
      const baseWidth = 1920;
      const baseHeight = 1080;
      const scaleX = window.innerWidth / baseWidth;
      const scaleY = window.innerHeight / baseHeight;
      setScale(Math.min(scaleX, scaleY));
    };

    window.addEventListener('resize', scaleSite);
    scaleSite();

    return () => window.removeEventListener('resize', scaleSite);
  }, []);

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: '1920px',
        height: '1080px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
