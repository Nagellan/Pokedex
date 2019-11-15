import React from 'react';
import './style.css';
import { observable } from 'mobx';
import { observer } from 'mobx-react'
import pokeStore from '../../stores/pokeStore'

const Card = observer(
  class Card extends React.Component {
    constructor(props) {
      super(props);
      this.store = pokeStore;
      this.pokemonData = observable({imgUrl: process.env.PUBLIC_URL+ "/blue-pokeball.png", element: "⠀⠀⠀⠀⠀⠀⠀⠀⠀"});
      this.fillInData(this.props.pokemonName);
    }

    fillInData(name) {
      this.store.getPokemonInfo(name).then((response) => {
        this.pokemonData.imgUrl = response.sprites.front_default;
        this.pokemonData.element = response.types[0].type.name;
      });
    }

    render() {
      return (
        <div className="Card">
          <div className="card-img-wrapper">
            <img className="card-img" src={this.pokemonData.imgUrl} alt="Pokemon avatar"/>
          </div>
          <div className="card-name">{this.props.pokemonName}</div>
          <div className="card-element">{this.pokemonData.element}</div>
        </div>
      );
    }
  }
)

export default Card;