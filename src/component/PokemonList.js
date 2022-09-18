import React from "react";
import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemon, loadPoke, nexPokemon } = props;

  const loadMore = () => {
    loadPoke();
  };

  return (
    <FlatList
      data={pokemon}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.FlatListContentContainer}
      onEndReached={nexPokemon && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <ActivityIndicator size="large" style={styles.spinner} color="#AE" />
      }
    />
  );
}

const styles = StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal: Platform.OS === "android" ? 10 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});
