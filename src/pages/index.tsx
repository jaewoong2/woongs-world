import Card from 'components/Organism/Card';
import Header from 'components/Organism/Header';
import React from 'react';

const Home = () => {
  return (
    <main style={{ display: 'flex' }}>
      <div style={{ width: `16%` }}>
        <Card />
      </div>
      <div style={{ width: '67%' }}>
        <Header headerItems={['til', 'dev', 'algorithm', 'about']} />
      </div>
    </main>
  );
};

export default Home;
