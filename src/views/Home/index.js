import React from 'react';
// import used components
import AsidePanel from '../../components/AsidePanel'
import MainField from '../../components/MainField'
// import component styles
import './index.css';

function Home() {
  return (
    <div id="Home">
      <div className="container">
        <AsidePanel />
        <MainField />
      </div>
    </div>
  );
}

export default Home;