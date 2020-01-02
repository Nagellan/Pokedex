import React from 'react';
import { observer } from 'mobx-react'
// import project storage
import pokeStore from '../../stores/pokeStore'
// import component styles
import './style.css';

class PageSwitcher extends React.Component {
  render() {
    return (
      <div id="PageSwitcher">
        <img
          className="arrow"
          src={process.env.PUBLIC_URL + "/img/arrow.svg"}
          alt="left arrow button"
        />
        <img
          className="arrow right"
          src={process.env.PUBLIC_URL + "/img/arrow.svg"}
          alt="right arrow button"
        />
      </div>
    );
  }
 
}

export default observer(PageSwitcher);