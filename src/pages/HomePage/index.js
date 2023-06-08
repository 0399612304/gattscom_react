import React from 'react';
import Layout from '../../Layout';
import IsamiGiken from '../../components/IsamiGiken';
import TopSimulation from '../../components/TopSimulation';
function HomePage() {
  return (
    <Layout id='home'>
      <IsamiGiken />
      <TopSimulation />
    </Layout>
  );
}

export default HomePage;