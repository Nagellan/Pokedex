import React from 'react';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react'
// import project storage
import pokeStore from '../../stores/pokeStore'
// import component styles
import './style.css';

const Card = observer(
  class Card extends React.Component {
    constructor(props) {
      super(props);
      this.pokemonData = observable({
        imgUrlFront: process.env.PUBLIC_URL + "/blue-pokeball.png",
        imgUrlBack: process.env.PUBLIC_URL + "/blue-pokeball.png",
        types: []
      });
      this.typeIcons = observable([null]);
      this.transTranslate = observable([null]);
      this.updateData(this.props.pokemonName);
      this.isFront = true;
    }

    componentDidMount() {
      setTimeout(() => this.transTranslate[0] = "translate(0, 0)", + pokeStore.numOfCards*100);
      pokeStore.incrNumOfCards();
    }

    updateData(name) {
      pokeStore.getPokemonInfo(name).then((response) => {
        this.pokemonData.imgUrlFront = response.sprites.front_default;
        this.pokemonData.imgUrlBack = response.sprites.back_default;
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

    switchAvatarView() {
      this.isFront = !this.isFront;
    }

    render() {
      return (
        <div
          className={"Card" + (this.props.pokemonName === pokeStore.currentPokemonName ? " active" : "")}
          style={{transform: this.transTranslate[0]}}
          onClick={(e) => pokeStore.updateCurrentPokemon(this.props.pokemonName, e)}
          onMouseEnter={(e) => this.switchAvatarView()}
          onMouseLeave={(e) => this.switchAvatarView()}
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
)

decorate(Card, {
  isFront: observable
});

export default Card;