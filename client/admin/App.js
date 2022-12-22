import * as React from "react";
import StartScreen from "./components/StartScreen.component";
import LoginScreen from "./components/LoginScreen.component";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen.component";
import SignupScreen from "./components/SignupScreen.component";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen.component";
import BottomNavBar from "./components/BottomNavBar.component";
import TopNavStack from "./components/TopNavStack.component";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavBar />
    </NavigationContainer >);
}