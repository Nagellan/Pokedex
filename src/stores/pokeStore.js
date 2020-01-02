import { observable, decorate } from 'mobx';
import pokeService from '../pokeService'

class PokeStore {
  constructor() {
    this.cardsPerPage = 10;
    this.currentPage = 1;
    this.pokemonList = [];
    this.numOfPokemons = Infinity;
    this.updateAmountOfPokemons();
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

  updateCardsPerPage(num) {
    this.cardsPerPage = num;
  }

  updateCurrentPage(incr) {
    this.currentPage = this.currentPage + (incr ? 1 : -1);
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

  updateAmountOfPokemons = async () => {
    const data = await pokeService.get("pokemon/");
    this.numOfPokemons = data.count;
  }
}

decorate(PokeStore, {
  cardsPerPage: observable,
  pokemonList: observable,
  currentPokemonName: observable,
  currentPage: observable
});

export default new PokeStore();