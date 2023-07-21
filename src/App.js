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
import { FloatButton } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import ScrollUpButton from "react-scroll-up-button";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
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
      {/* <FloatButton className="my-back-top-button">
      <FloatButton.BackTop
        className="custom-back-top"
        // icon={<SlArrowUp />}
        duration={1000}
      />
      </FloatButton> */}
      <div>

      {showButton && (
        <button onClick={handleClick} style={{ position: 'fixed', bottom: '50px', right: '50px' }}>
          Back to top
        </button>
      )}
    </div>
     
    </BrowserRouter>
 
  );
}

export default App;
