import React from 'react';
import { observer } from 'mobx-react'
// import project storage
import pokeStore from '../../stores/pokeStore'
// import component styles
import './style.css';

class CardsNumSelector extends React.Component {
  constructor(props) {
    super(props);

    this.cardNums = [10, 20, 50];
  }

  render() {
    return (
      <div id="CardsNumSelector">
        { this.cardNums.map((cardNum, index) => [
          <span
            key={"card-num-" + cardNum}
            className={"card-num" + ( pokeStore.cardsPerPage === cardNum ? " active" : "")}
            onClick={(e) => {
              if (pokeStore.cardsPerPage !== cardNum)
                pokeStore.updateCardsPerPage(cardNum);
              pokeStore.updatePokemonList();
            }}
          >
            { cardNum }
          </span>,
          index !== this.cardNums.length - 1
            ? <span className="sep" key={"sep-" + index}> &nbsp;/&nbsp; </span>
            : ""
        ])}
      </div>
    );
  }
 
}

export default observer(CardsNumSelector);