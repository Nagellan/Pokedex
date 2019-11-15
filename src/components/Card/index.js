import React from 'react';
import styles from './style.css';
import { observable } from 'mobx';
import { observer } from 'mobx-react'
import pokeStore from '../../stores/pokeStore'

const Card = observer(
  class Card extends React.Component {
    constructor(props) {
      super(props);
      this.store = pokeStore;
      this.pokemonData = observable({
        imgUrl: process.env.PUBLIC_URL + "/blue-pokeball.png",
        types: []
      });
      this.typeIcons = observable([null]);
      this.transTranslate = observable([null]);
      this.updateData(this.props.pokemonName);
    }

    componentDidMount() {
      setTimeout(() => this.transTranslate[0] = "translate(0, 0)", + this.store.numOfCards*100);
      this.store.incrNumOfCards();
    }

    updateData(name) {
      this.store.getPokemonInfo(name).then((response) => {
        this.pokemonData.imgUrl = response.sprites.front_default;
        this.pokemonData.types = response.types.map(k => k.type.name);
        this.updateTypeIcons();
      });
    }

    updateTypeIcons() {
      this.pokemonData.types.forEach(type => {
        this.typeIcons.push(
          <img
            className="card-type"
            src={process.env.PUBLIC_URL + "/types/" + type + ".png"} 
            alt={type}
            key={type}
            title={type}
          />
        );
      })
    }

    render() {
      return (
        <div className="Card" style={{transform: this.transTranslate[0]}}>
          <div className="card-img-wrapper">
            <img className="card-img" src={this.pokemonData.imgUrl} alt="Pokemon avatar" />
          </div>
          <div className="card-name">{this.props.pokemonName}</div>
          <div className="card-types">{this.typeIcons}</div>
        </div>
      );
    }
  }
)

export default Card;