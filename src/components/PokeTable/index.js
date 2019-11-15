import React from 'react';
import { observable } from 'mobx'
import { observer } from 'mobx-react'
// import project storage
import pokeStore from '../../stores/pokeStore'
// import used components
import Card from '../Card'
// import component's styles
import './style.css';

const PokeTable = observer(
  class PokeTable extends React.Component {
    constructor(props) {
      super(props);
      this.store = pokeStore;
      this.cards = observable([]);
      this.drawCards(0);
    }

    drawCards(offset) {
      this.store.updatePokemonList(offset).then((response) => {
        Object.values(response.results).forEach((pokemonData) => {
          this.cards.push(<Card key={pokemonData.name} pokemonName={pokemonData.name} />);
        });
      });
    }

    render() {
      return (
        <div className="PokeTable">
          {this.cards}
        </div>
      );
    }
  }
)

export default PokeTable;