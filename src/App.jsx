import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Homepage.jsx';
import Download from './components/Download.jsx';

function App() {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const baseWidth = 1920;
    const baseHeight = 1080;

    const scaleSite = () => {
      const scaleX = window.innerWidth / baseWidth;
      const scaleY = window.innerHeight / baseHeight;
      const scale = Math.min(scaleX, scaleY);

      const offsetX = (window.innerWidth - baseWidth * scale) / 2;
      const offsetY = (window.innerHeight - baseHeight * scale) / 2;

      setScale(scale);
      setOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener('resize', scaleSite);
    scaleSite();

    return () => window.removeEventListener('resize', scaleSite);
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        overflowX: 'hidden',
        overflowY: 'auto',
        backgroundColor: '#0b090b', // solid background color
        position: 'relative',
      }}
    >
      <div
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          transformOrigin: 'top left',
          width: '1920px',
          minHeight: '1080px',
          position: 'absolute',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
