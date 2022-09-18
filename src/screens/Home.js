import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getpokemon, getpokemonData } from "../api/pokemon";
import PokemonList from "../component/PokemonList";

export default function Home() {
  const [pokemon, setpokemon] = useState([]);
  const [nexPokemon, setNexPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPoke();
    })();
  }, []);

  const loadPoke = async () => {
    try {
      const pokemonArray = [];
      const response = await getpokemon(nexPokemon);
      setNexPokemon(response.next);
      for await (const data of response.results) {
        const pokemon = await getpokemonData(data.url);
        pokemonArray.push({
          id: pokemon.id,
          name: pokemon.name,
          type: pokemon.types[0].type.name,
          order: pokemon.order,
          imagen: pokemon.sprites.other["official-artwork"].front_default,
        });
      }

      setpokemon([...pokemon, ...pokemonArray]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemon={pokemon}
        loadPoke={loadPoke}
        nexPokemon={nexPokemon}
      />
    </SafeAreaView>
  );
}
