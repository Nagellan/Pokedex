import React from 'react';
import { observable, decorate, reaction, computed } from 'mobx';
import { observer } from 'mobx-react'
// import project storage
import pokeStore from '../../stores/pokeStore'
// import component styles
import './style.css';

class StatsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.statsList = [];
    this.abilitiesList = [];
  }

  updatePanel = reaction(
    () => pokeStore.currentPokemonName,
    (pokemonName) => {
      this.updateStats(pokemonName);
      this.updateAbilities(pokemonName);
    }
  )

  updateStats(name) {
    pokeStore.getPokemonInfo(name).then(response => {
      this.statsList = response.stats.slice().reverse().map((stat) => {
        return {
          name: stat.stat.name,
          value: stat.base_stat
        }
      })
    });
  }

  updateAbilities(name) {
    pokeStore.getPokemonInfo(name).then(async response => {
      let abilities = await response.abilities.map((abil) =>
        pokeStore.getAbilityInfo(abil.ability.url.split('/').reverse()[1])  // get info by using ability id
          .then(async (res) => await {
            name: abil.ability.name,
            descr: res.effect_entries[0].effect
          })
      );
      Promise.all(abilities).then((resAbilities) => {
        this.abilitiesList = resAbilities;
      });
    });
  }

  get stats() {
    if (this.statsList.length === 0) return null;
    return (
      <div key="statistics" className="info-block">
        <p key="statistics-title" className="title">Statistics</p>
        {this.statsList.map(stat => (
          <p key={stat.name}>
            <span key={stat.name + "-stat"} className="stat-name">{stat.name}</span>:
            <span key={stat.name + "-value"} className="stat-value"> {stat.value}</span>
          </p>
        ))}
      </div>
    );
  }

  get abilities() {
    if (this.abilitiesList.length === 0) return null;
    return (
      <div key="abilities" className="info-block">
        <p key="abilities-title" className="title">Abilities</p>
        {this.abilitiesList.map(ability => [
          <p key={ability.name + "-abil"} className="abil-name">{ability.name}</p>,
          <p key={ability.name + "-descr"} className="abil-descr">{ability.descr}</p>
        ])}
      </div>
    );
  }

  render() {
    return (
      <aside className="StatsPanel">
        <div className="pokemon-name">{pokeStore.currentPokemonName || "Pokemon Stats"}</div>
        <div className="info-wrapper">
          {this.stats || <img src={process.env.PUBLIC_URL + "/blue-pokeball.png"} alt="template pokeball" />}
          {this.abilities}
        </div>
      </aside>
    );
  }
}

decorate(StatsPanel, {
  statsList: observable,
  abilitiesList: observable,
  stats: computed,
  abilities: computed
});

export default observer(StatsPanel);