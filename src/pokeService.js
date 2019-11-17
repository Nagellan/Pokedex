const webApiUrl = "https://pokeapi.co/api/v2/";

class PokeService {
  get = async (path, params = {}) => {
    const urlParams = new URLSearchParams(Object.entries(params));
    const options = {
      method: "GET",
    }
    // if there're no params, then don't add them to request url (together with question mark)
    const request = new Request(webApiUrl + path + (!!urlParams.toString() ? "?" + urlParams : ""), options);
    const response = await fetch(request);
    return response.json();
  }
}

const pokeService = new PokeService();

export default pokeService;