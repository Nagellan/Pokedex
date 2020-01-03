import React from 'react';
import { observer } from 'mobx-react'
// import project storage
import pokeStore from '../../stores/pokeStore'
// import component styles
import './style.css';

class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    console.log("props");
  }
  render() {
    return (
      <div id="PageSelector">
        {
          pokeStore.currentPage === 1 || pokeStore.currentPage === 2
          ? <div>1 | 2 | 3 | 4 | {Math.ceil(pokeStore.numOfPokemons/pokeStore.cardsPerPage)}</div>
          : pokeStore.currentPage === Math.ceil(pokeStore.numOfPokemons/pokeStore.cardsPerPage) || pokeStore.currentPage === Math.ceil(pokeStore.numOfPokemons/pokeStore.cardsPerPage) - 1
            ? <div>1 | {Math.ceil(pokeStore.numOfPokemons/pokeStore.cardsPerPage) - 3} | {Math.ceil(pokeStore.numOfPokemons/pokeStore.cardsPerPage) - 2} | {Math.ceil(pokeStore.numOfPokemons/pokeStore.cardsPerPage) - 1} | {Math.ceil(pokeStore.numOfPokemons/pokeStore.cardsPerPage)}</div>
            : <div>1 | {pokeStore.currentPage - 1} | {pokeStore.currentPage} | {pokeStore.currentPage + 1} | {Math.ceil(pokeStore.numOfPokemons/pokeStore.cardsPerPage)}</div>
        }
      </div>
    );
  }
 
}

export default observer(PageSelector);