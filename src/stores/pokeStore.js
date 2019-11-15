import pokeService from '../pokeService'
import { observable, decorate, computed } from 'mobx';

class PokeStore {
  constructor() {
    this.cardsPerPage = 10;
    this.pokemonList = [];
    this.numOfCards = 0;
    this.currentPokemonName = "";
  }

  getCurrentPokemon = computed(() => this.currentPokemonName);

  updateCurrentPokemon(name) {
    this.currentPokemonName = name;
  }

  incrNumOfCards() {
    this.numOfCards += 1;
  }

  updatePokemonList = async (offset) => {
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
  currentPokemonName: observable,
  getCurrentPokemon: observable
});

const pokeStore = new PokeStore();

export default pokeStore;