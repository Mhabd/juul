import { Routes, Route } from 'react-router-dom';
import Home from './components/Homepage.jsx';
import Download from './components/Download.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  );
}

export default App;
