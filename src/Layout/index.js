import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './style.css'
function Layout(props) {
  return (
    <div>
      <Header id = {props.id}></Header>
        {
          props.children
        }
      <Footer></Footer>
      {/* <button class="button_to-the-top" onclick="topFunction()" id="myBtn">
    <i class="fa-solid fa-chevron-up"></i>
     </button> */}
    </div>
  );
}

export default Layout;