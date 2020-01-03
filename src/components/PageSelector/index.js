import React from 'react';
import { computed, decorate } from 'mobx';
import { observer } from 'mobx-react'
// import project storage
import pokeStore from '../../stores/pokeStore'
// import component styles
import './style.css';

class PageSelector extends React.Component {
  get lastPage() {
    return Math.ceil(pokeStore.numOfPokemons/pokeStore.cardsPerPage);
  }

  render() {
    function PageButton(props) {
      return (
        <div
          className={"page " + props.addClass + (+props.num === pokeStore.currentPage ? " active" : "")}
        >
          { props.num }
        </div>
      );
    }

    return (
      <div id="PageSelector">
        <PageButton num="1" addClass="first" />

        <div className="pages-closest">
          {
            pokeStore.currentPage === 1 || pokeStore.currentPage === 2
            ? [ <PageButton num="2" key="page-num-2" />, "|" ,
                <PageButton num="3" key="page-num-3" />, "|" ,
                <PageButton num="4" key="page-num-4" /> ]
            : pokeStore.currentPage === this.lastPage || pokeStore.currentPage === this.lastPage - 1
              ? [ <PageButton num={ this.lastPage - 3 } key={"page-num-" + (this.lastPage - 3) } />, "|",
                  <PageButton num={ this.lastPage - 2 } key={"page-num-" + (this.lastPage - 2) } />, "|",
                  <PageButton num={ this.lastPage - 1 } key={"page-num-" + (this.lastPage - 1) } /> ]
              : [ <PageButton num={ pokeStore.currentPage - 1 } key={"page-num-" + (pokeStore.currentPage - 1) } />, "|",
                  <PageButton num={ pokeStore.currentPage     } key={"page-num-" + (pokeStore.currentPage)     } />, "|",
                  <PageButton num={ pokeStore.currentPage + 1 } key={"page-num-" + (pokeStore.currentPage + 1) } /> ]
          }
        </div>

        <PageButton num={ this.lastPage } addClass="last" />
      </div>
    );
  }
}

decorate(PageSelector, {
  lastPage: computed,
});

export default observer(PageSelector);