import { View, Text } from "react-native";
import React from "react";
import { POKEMON_TYPE_COLORS } from "./constants";

const getColor = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColor;
