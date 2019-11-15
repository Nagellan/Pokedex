import React from 'react';
import { observer } from 'mobx-react'
// import component's styles
import './style.css';
// import stores
import pokeStore from '../../stores/pokeStore'
// import another used components
import Card from '../Card'
import { observable } from 'mobx'


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