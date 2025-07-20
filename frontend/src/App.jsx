import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StreamersPage from './pages/StreamersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/streamers/:heroId" element={<StreamersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
