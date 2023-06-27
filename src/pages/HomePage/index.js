import React from "react";
import Layout from "../../Layout";
import IsamiGiken from '../../components/IsamiGiken';
import TopSimulation from "../../components/TopSimulation";
import Infomation from "../../components/Infomation";
import News from "../../components/News";
// import MidImage from "../../components/MidImage";
import Renovation from "../../components/TopRenovation";
// import ContactPage from '../../pages/ContactPage'
function HomePage() {
  return (
    <Layout id="home">
      <IsamiGiken />   
      <TopSimulation />
      <Renovation />
      <Infomation />
      <News></News>
      {/* <MidImage></MidImage> */}
      {/* <ContactPage/> */}
    </Layout>
  );
}

export default HomePage;
