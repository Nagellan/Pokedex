import { observable, decorate, computed } from 'mobx';
import pokeService from '../pokeService'

class PokeStore {
  constructor() {
    this.cardsPerPage = 10;
    this.pokemonList = [];
    this.currentPokemonName = "";
  }

  updateCurrentPokemon(name) {
    this.currentPokemonName = name;
  }

  updatePokemonList(offset) {
    this.getPokemonList(offset).then((response) => {
      this.pokemonList = Object.values(response.results).map((pokemonData) => pokemonData.name)
    });
  }

  // using pokeService
  getPokemonList = async (offset) => {
    const data = await pokeService.get("pokemon/", {'offset': offset, 'limit': this.cardsPerPage});
    return data;
  }

  getPokemonInfo = async(name) => {
    const data = await pokeService.get("pokemon/" + name + "/");
    return data;
  }

  getAbilityInfo = async(id) => {
    const data = await pokeService.get("ability/" + id + "/");
    return data;
  }
}

decorate(PokeStore, {
  cardsPerPage: observable,
  pokemonList: observable,
  currentPokemonName: observable
});

export default new PokeStore();