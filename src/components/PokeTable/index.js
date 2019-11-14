import React from 'react';
import { observer } from 'mobx-react'
// import component's styles
import './style.css';
// import stores
import pokeStore from '../../stores/pokeStore'
// import another used components
import Card from '../Card'


const PokeTable = observer(
  class PokeTable extends React.Component {
    constructor(props) {
      super(props);
      this.store = pokeStore;
    }

    drawCards() {
      let cards = [];
      this.store.getPokemonList().forEach((pokemonData) => {
        cards.push(<Card key={pokemonData.name} pokemonData={pokemonData} />);
      });
      return cards;
    }

    render() {
      return (
        <div className="PokeTable">
          {this.drawCards()}
        </div>
      );
    }
  }
)

export default PokeTable;