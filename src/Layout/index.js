import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Layout(props) {
  return (
    <div>
      <Header id = {props.id}></Header>
        {
          props.children
        }
      <Footer></Footer>
    </div>
  );
}

export default Layout;