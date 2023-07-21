import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./style.css";
function Layout(props) {
  return (
    <div>
      <Header id={props.id}></Header>
      {props.children}
      <Footer></Footer>
      {/* <BackTop className="my-back-top-button">
        <UpOutlined />
      </BackTop> */}
    </div>
  );
}

export default Layout;
