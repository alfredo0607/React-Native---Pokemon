import { ScrollView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getpokemonDataDetailts } from "../api/pokemon";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../component/pokemon/Header";
import Type from "../component/pokemon/Type";
import Stats from "../component/pokemon/Stats";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setpokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getpokemonDataDetailts(params.id);

        setpokemon(response);
      } catch (error) {
        console.log(error);
        navigation.goBack();
      }
    })();
  }, [params]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
