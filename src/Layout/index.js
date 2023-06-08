import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      {
        children
      }
      <Footer></Footer>
    </div>
  );
}

export default Layout;