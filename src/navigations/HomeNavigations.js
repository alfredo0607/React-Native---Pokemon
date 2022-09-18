import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Pokemon from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function HomeNavigations() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="pokemon"
        component={Pokemon}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
