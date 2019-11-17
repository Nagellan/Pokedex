import React from 'react';
// import used components
import MainField from './components/MainField'
// import component styles
import './index.css';

function App() {
  return (
    <div id="App">
      <header id="AppHeader">
        <h1>Pokedex</h1>
      </header>
      <MainField />
      <footer id="AppFooter">
        Made by <strong>@<a href="http://t.me/ireknazm">ireknazm</a></strong> for iDecisionGames
      </footer>
    </div>
  );
}

export default App;