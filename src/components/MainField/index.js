import React from 'react';
// import used components
import PokeTable from '../PokeTable'
import StatsPanel from '../StatsPanel'
// import component styles
import './style.css';

function MainField() {
  return (
    <div className="MainField"> 
      <div className="container">
        {/* <StatsPanel /> */}
        <PokeTable />
      </div>
    </div>
  );
}

export default MainField;