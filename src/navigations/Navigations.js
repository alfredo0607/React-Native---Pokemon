import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Home from "../screens/Home";
import Account from "../screens/Account";
import Favorite from "../screens/Favorite";
import { Image } from "react-native";
import FavoriteNavigations from "./FavoriteNavigations";
import HomeNavigations from "./HomeNavigations";
import AccountNavigations from "./AccountNavigations";

const Tap = createBottomTabNavigator();

export default function Navigations() {
  return (
    <Tap.Navigator>
      <Tap.Screen
        name="favorite"
        component={FavoriteNavigations}
        options={{
          tabBarLabel: "Favorito",
          tabBarIcon: (color, size) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tap.Screen
        name="home"
        component={HomeNavigations}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPoker(),
        }}
      />
      <Tap.Screen
        name="account"
        component={AccountNavigations}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: (color, size) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tap.Navigator>
  );
}

function renderPoker() {
  return (
    <Image
      source={require("../../src/assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
