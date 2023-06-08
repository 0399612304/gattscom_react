import React from 'react';
import Layout from '../../Layout';
import IsamiGiken from '../../components/IsamiGiken';
import TopSimulation from '../../components/TopSimulation';
import Infomation from '../../components/Infomation';
import News from '../../components/News';
import MidImage from '../../components/MidImage';
function HomePage() {
  return (
    <Layout id='home'>
      <IsamiGiken />
      <TopSimulation />
      <Infomation></Infomation>
      <News></News>
      <MidImage></MidImage>
    </Layout>
  );
}

export default HomePage;