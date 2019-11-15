import React from 'react';
import { observable, decorate } from 'mobx';
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
      pokeStore.getPokemonInfo(name).then(async response => {
        let abils = await response.abilities.map((abil) =>
          pokeStore.getAbilityInfo(abil.ability.url.split('/').reverse()[1])
            .then(async (res) => await [
              <p key={abil.ability.name+"skill"} className="skill">{abil.ability.name}</p>,
              <p key={abil.ability.name+"descr"} className="descr">{res.effect_entries[0].effect}</p>
            ])
        );
        Promise.all(abils).then((abilsRes) => {
          this.abilities = (
            <div key="abilities" className="stats-block">
              <p key="abilities-title" className="title">Abilities</p>
              {abilsRes}
            </div>
          );
        });
      });
    }



    updatePokemonInfo(name) {
      pokeStore.getPokemonInfo(name).then(response => {
        this.pokemonInfo = (
          <div key="statistics" className="stats-block">
            <p key="statistics-title" className="title">Statistics</p>
            {response.stats.slice().reverse().map((stat) =>
              <p key={stat.stat.name}>
                <span key={stat.stat.name+"char"} className="char">{stat.stat.name}</span>:
                <span key={stat.stat.name+"qual"} className="qual"> {stat.base_stat}</span>
              </p>
            )}
          </div>
        );
      });
    }

    render() {
      return (
        <aside className="StatsPanel">
          <div className="pokemon-name">{pokeStore.currentPokemonName || "Pokemon Stats"}</div>
          <div className="info-wrapper">
            {this.pokemonInfo || <img src={process.env.PUBLIC_URL + "/blue-pokeball.png"} alt="template pokeball" />}
            {this.abilities}
          </div>
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