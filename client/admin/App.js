import * as React from "react";
import StartScreen from "./components/StartScreen.component";
import LoginScreen from "./components/LoginScreen.component";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen.component";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>);
}
