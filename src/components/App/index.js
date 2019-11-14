import React from 'react';
import { Provider } from 'mobx-react';
import pokeStore from '../../stores/pokeStore'
import './style.css';

function App() {
  return (
    <Provider { ... {pokeStore} }>
      <div className="App">
        <h1>Pokedex</h1>
      </div>
    </Provider>
  );
}

export default App;