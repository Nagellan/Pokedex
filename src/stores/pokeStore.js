import pokeService from '../pokeService'
import { observable } from 'mobx'

class PokeStore {

  constructor() {
    this.cardsPerPage = 10;
    this.pokemonList = observable([]);
  }

  updatePokemonList = async (offset) => {
    const data = await pokeService.get("pokemon/", {'offset': offset, 'limit': this.cardsPerPage});
    return data;
  }

  getPokemonInfo = async(name) => {
    const data = await pokeService.get("pokemon/" + name + "/");
    return data;
  }
}

const pokeStore = new PokeStore();

export default pokeStore;