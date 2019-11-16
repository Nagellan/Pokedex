import React from 'react';
import { decorate, observable, autorun, trace, extendObservable } from 'mobx';
import { observer } from 'mobx-react'
// import project storage
import pokeStore from '../../stores/pokeStore'
// import used components
import Card from '../Card'
// import component's styles
import './style.css';

class PokeTable extends React.Component {
  constructor(props) {
    super(props);
    this.cards = [];
    pokeStore.updatePokemonList();
  }

  drawCards = autorun(() => {
    const pokemonList = pokeStore.pokemonList;
    for (let i in pokemonList) {
      setTimeout(() => this.cards.push(
        <Card key={pokemonList[i]} pokemonName={pokemonList[i]} />
      ), (i + 1) * 100);
    }
  })

  render() {
    return (
      <div className="PokeTable">
        <p>{this.cards.slice()}</p>
      </div>
    );
  }
}

decorate(PokeTable, {
  cards: observable
});

export default observer(PokeTable);