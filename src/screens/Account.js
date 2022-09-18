import { View } from "react-native";
import React from "react";
import UserData from "../component/Auth/UserData";
import LoginForm from "../component/Auth/LoginForm";
import useAuth from "../hook/useAuth";

export default function Account() {
  const { auth } = useAuth();

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
