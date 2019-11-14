import { observable } from 'mobx';
import pokeService from '../pokeService'

class PokeStore {
  getPokemonData = async (name) => {
    const data = await pokeService.get("pokemon/" + name + "/");
    return data;
  }
}

const pokeStore = new PokeStore();

export default pokeStore;