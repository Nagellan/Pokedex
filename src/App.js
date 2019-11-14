import React from 'react';
import { Provider } from 'mobx-react';
import pokeStore from './stores/pokeStore'
import './index.css';
import MainField from './components/MainField'

function App() {
  return (
    <Provider {... { pokeStore }}>
      <div id="App">
        <header id="AppHeader">
          <h1>Pokedex</h1>
        </header>
        <MainField />
        <footer id="AppFooter">
          Made by <strong>@<a href="http://t.me/ireknazm">ireknazm</a></strong> for iDecisionGames
        </footer>
      </div>
    </Provider>
  );
}

export default App;