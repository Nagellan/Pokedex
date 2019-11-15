import React from 'react';
import { observable, decorate, action } from 'mobx';
import { observer } from 'mobx-react'
// import project storage
import pokeStore from '../../stores/pokeStore'
// import component styles
import './style.css';

const StatsPanel = observer(
  class StatsPanel extends React.Component {
    constructor(props) {
      super(props);
      this.pokemonInfo = null;
      this.abilities = null;
      pokeStore.getCurrentPokemon.observe((change) => {
        this.updatePokemonInfo(change.newValue);
        this.updateAbilities(change.newValue);
      })
    }

    updateAbilities(name) {
      pokeStore.getPokemonInfo(name).then(async response => 
        await response.abilities.map((abil) => 
          pokeStore.getAbilityInfo(abil.ability.url.split('/').reverse()[1])
            .then(async (res) => {
              this.abilities = [<p key={abil.ability.name} className="skill">{abil.ability.name}</p>, <p key={abil.ability.name + "descr"} className="descr">{res.effect_entries[0].effect}</p>]
            })
        )
      );
    }

    updatePokemonInfo(name) {
      pokeStore.getPokemonInfo(name).then(response => {
        this.pokemonInfo = (
          <div className="info-wrapper">
            <div key="statistics" className="stats-block">
              <p className="title">Statistics</p>
              {response.stats.slice().reverse().map((stat) =>
                <p key={stat.stat.name}>
                  <span className="char">{stat.stat.name}</span>:
                  <span className="qual"> {stat.base_stat}</span>
                </p>
              )}
            </div>

            <div key="abilities" className="stats-block">
              <p className="title">Abilities</p>
              {this.abilities}
            </div>
          </div>
        );
      });
    }

    render() {
      return (
        <aside className="StatsPanel">
          <div className="pokemon-name">{pokeStore.currentPokemonName}</div>
          {this.pokemonInfo}
        </aside>
      );
    }
  }
)

decorate(StatsPanel, {
  pokemonInfo: observable,
  abilities: observable
});



export default StatsPanel;