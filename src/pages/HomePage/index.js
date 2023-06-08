import React from 'react';
import Layout from '../../Layout';
import IsamiGiken from '../../components/IsamiGiken';
import TopSimulation from '../../components/TopSimulation';
import Contact from '../ContactPage'
function HomePage() {
  return (
    <Layout id='home'>
      <IsamiGiken />
      <TopSimulation />
      <Contact/>
    </Layout>
  );
}

export default HomePage;