import React from 'react';
import './style.css';

import PokeTable from '../PokeTable'

function MainField() {
  return (
    <div className="MainField"> 
      <div className="container">
        <PokeTable />
      </div>
    </div>
  );
}

export default MainField;