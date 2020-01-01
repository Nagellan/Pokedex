import React from 'react';
// import used components
import PokeTable from '../PokeTable'
// import component styles
import './style.css';

function MainField() {
  return (
    <div id="MainField">
      <div className="top-panel"></div>
      <PokeTable />
      <div className="bottom-panel"></div>
    </div>
  );
}

export default MainField;