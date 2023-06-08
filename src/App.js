import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RecruitPage from './pages/RecruitPage';
import SimulationPage from './pages/SimulationPage';
import Contact from './pages/ContactPage';
import RenovationPage from './pages/RenovationPage';
import NewlistPage from './pages/NewList_page';
import PrivacyPolicyPage from './pages/PrivacyPoliicyPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/simulation" element={<SimulationPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/renovation" element={<RenovationPage />} />
        <Route path="/newlist" element={<NewlistPage />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
