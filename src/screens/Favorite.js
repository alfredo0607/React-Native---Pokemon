import { View, Text } from "react-native";
import React from "react";
import useAuth from "../hook/useAuth";
import NoLogged from "../component/NoLogged";

export default function Favorite() {
  const { auth } = useAuth();

  return !auth ? <NoLogged /> : <Text>lista de favoritos</Text>;
}
