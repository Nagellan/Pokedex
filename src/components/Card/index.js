import React from 'react';
import './style.css';

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <img className="card-img" src={this.props.pokemonData.imgUrl} alt="Pokemon avatar"/>
        <div className="card-name">{this.props.pokemonData.name}</div>
        <div className="card-element">{this.props.pokemonData.element}</div>
      </div>
    );
  }
}

export default Card;