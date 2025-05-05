import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Homepage.jsx';
import Download from './components/Download.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  );
}

export default App;
