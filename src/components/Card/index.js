import React from 'react';
import { observable, decorate, computed } from 'mobx';
import { observer } from 'mobx-react'
// import project storage
import pokeStore from '../../stores/pokeStore'
// import component styles
import './style.css';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.pokemonData = {
      imgUrlFront: process.env.PUBLIC_URL + "/blue-pokeball.png",
      imgUrlBack: process.env.PUBLIC_URL + "/blue-pokeball.png",
      types: []
    };
    this.translate = "";
    this.isFront = true;

    this.updateData(this.props.pokemonName);
  }

  // animate card appearance
  componentDidMount() {
    setTimeout(() => this.translate = "translate(0, 0)", (this.props.index + 1) * 100);
  }

  // switch pokemon image between front & back depending on card hover
  switchAvatarView(isFront) {
    this.isFront = isFront;
  }

  updateData(name) {
    pokeStore.getPokemonInfo(name).then((response) => {
      this.pokemonData.imgUrlFront = response.sprites.front_default;
      this.pokemonData.imgUrlBack = response.sprites.back_default;
      this.pokemonData.types = response.types.map(k => k.type.name);
    });
  }

  get typeIcons() {
    return this.pokemonData.types.map(type => 
      <img
        className="card-type"
        src={process.env.PUBLIC_URL + "/types/" + type + ".png"} 
        alt={type}
        key={type}
        title={type}
      />
    )
  }

  render() {
    return (
      <div
        className={"Card" + (this.props.pokemonName === pokeStore.currentPokemonName ? " active" : "")}
        style={{transform: this.translate}}
        onClick={(e) => pokeStore.updateCurrentPokemon(this.props.pokemonName)}
        onMouseEnter={(e) => this.switchAvatarView(false)}
        onMouseLeave={(e) => this.switchAvatarView(true)}
      >
        <div className="card-img-wrapper">
          { this.isFront 
          ? <img className="card-img" src={this.pokemonData.imgUrlFront} alt="Pokemon avatar" /> 
          : <img className="card-img" src={this.pokemonData.imgUrlBack} alt="Pokemon avatar" /> 
          }
        </div>
        <div className="card-name">{this.props.pokemonName}</div>
        <div className="card-types">{this.typeIcons}</div>
      </div>
    );
  }
}

decorate(Card, {
  pokemonData: observable,
  translate: observable,
  isFront: observable,
  typeIcons: computed
});

export default observer(Card);