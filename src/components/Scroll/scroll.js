import { useEffect, useState } from "react";

const BackToTop = () => {

    const [showButton, setShowButton] = useState(false);
  console.log(showButton)
    useEffect(() => {
      const handleScroll = () => {
        setShowButton(window.pageYOffset > 200);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleBackToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <>
        {showButton && (
          <button
            className="back-to-top-button"
            onClick={handleBackToTop}
            style={{ backgroundColor: '#fff', color: '#000', position: 'fixed', bottom: '20px', right: '20px', zIndex:9999 }}
          >
            Back to Top
          </button>
        )}
      </>
    );
  };
  export default BackToTop