import pokeService from '../pokeService'

class PokeStore {
  constructor() {
    this.pokemonList = [
      { name: 'Pikachu', element: 'lightning', imgUrl: 'http://pngimg.com/uploads/pokeball/pokeball_PNG7.png' },
      { name: 'Charmellion', element: 'fire', imgUrl: 'http://pngimg.com/uploads/pokeball/pokeball_PNG7.png' },
      { name: 'Piploop', element: 'water', imgUrl: 'http://pngimg.com/uploads/pokeball/pokeball_PNG7.png' },
      { name: 'Meowt', element: 'cutiness', imgUrl: 'http://pngimg.com/uploads/pokeball/pokeball_PNG7.png' }
    ];
  }

  getPokemonList() {
    return this.pokemonList;
  }

  getPokemonData = async (name) => {
    const data = await pokeService.get("pokemon/" + name + "/");
    return data;
  }
}

const pokeStore = new PokeStore();

export default pokeStore;