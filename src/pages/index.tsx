import Card from 'components/Organism/Card';
import Header from 'components/Organism/Header';
import Layout from '../template/Layout';
import React from 'react';

const Home = () => {
  return (
    <Layout>
      <main style={{ display: 'flex' }}>
        <div style={{ width: `16%` }}>
          <Card />
        </div>
        <div style={{ width: '67%' }}>
          <Header headerItems={['til', 'dev', 'algorithm', 'about']} />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
