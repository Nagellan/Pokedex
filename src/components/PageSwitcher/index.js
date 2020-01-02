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
          className={"arrow" + (pokeStore.currentPage === 1 ? " disabled" : "")}
          src={process.env.PUBLIC_URL + "/img/arrow.svg"}
          alt="left arrow button"
          onClick={(e) => {
            if (pokeStore.currentPage !== 1) {
              pokeStore.updateCurrentPage(0);
              pokeStore.updatePokemonList(pokeStore.currentPage*pokeStore.cardsPerPage - pokeStore.cardsPerPage);
            }
          }}
        />
        <img
          className={"arrow right" + (pokeStore.numOfPokemons < pokeStore.cardsPerPage*(pokeStore.currentPage) ? " disabled" : "")}
          src={process.env.PUBLIC_URL + "/img/arrow.svg"}
          alt="right arrow button"
          onClick={(e) => {
            if (pokeStore.numOfPokemons >= pokeStore.cardsPerPage*(pokeStore.currentPage)) {
              pokeStore.updatePokemonList(pokeStore.currentPage*pokeStore.cardsPerPage);
              pokeStore.updateCurrentPage(1);
            }
          }}
        />
      </div>
    );
  }
 
}

export default observer(PageSwitcher);