import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RecruitPage from './pages/RecruitPage';
import SimulationPage from './pages/SimulationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="recruit" element={<RecruitPage />} />
        <Route path="simulation" element={<SimulationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
