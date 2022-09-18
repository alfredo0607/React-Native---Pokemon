import { API_HOST } from "../util/constants";

export async function getpokemon(nexPokemon) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&0ffset=0`;
    const response = await fetch(nexPokemon || url);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}

export async function getpokemonData(url) {
  try {
    const response = await fetch(url);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}

export async function getpokemonDataDetailts(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}
