import React from "react";
import Layout from "../../Layout";
import IsamiGiken from '../../components/IsamiGiken';
import TopSimulation from "../../components/TopSimulation";
import Infomation from "../../components/Infomation";
import News from "../../components/News";
import Renovation from "../../components/TopRenovation";
import MidImages from "../../components/MidImage"
function HomePage() {
  return (
    <Layout id="home">
      <main>
      <IsamiGiken />   
      <TopSimulation />
      <Renovation />
      <Infomation />
      <News></News>
      <MidImages></MidImages>
      </main>
    </Layout>
  );
}

export default HomePage;
