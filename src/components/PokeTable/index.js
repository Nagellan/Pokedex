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
    pokeStore.updatePokemonList();
  }

  render() {
    return (
      <div className="PokeTable">
        {pokeStore.pokemonList.map((pokeName, index) => 
          <Card key={pokeName} pokemonName={pokeName} index={index} />
        )}
      </div>
    );
  }
}

export default observer(PokeTable);