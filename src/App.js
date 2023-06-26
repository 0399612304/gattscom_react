import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RecruitPage from "./pages/RecruitPage";
import SimulationPage from "./pages/SimulationPage";
import Contact from "./pages/ContactPage";
import RenovationPage from "./pages/RenovationPage";
import NewlistPage from "./pages/NewList_page";
import PrivacyPolicyPage from "./pages/PrivacyPoliicyPage";
import { BackTop } from 'antd';
import {UpOutlined} from "@ant-design/icons"

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
        <Route path="/new-list" element={<NewlistPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes> 
      <div>
      {/* your component's content */}
      <BackTop  className="my-back-top-button">
        <UpOutlined />
              </BackTop>
    </div>
    </BrowserRouter>
  );
}

export default App;
