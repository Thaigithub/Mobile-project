import * as React from "react";
import StartScreen from "./components/StartScreen.component";
import LoginScreen from "./components/LoginScreen.component";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen.component";
import SignupScreen from "./components/SignupScreen.component";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#64D2FF"
        },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 30,
        }
      }} initialRouteName="Login">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Đăng nhập", headerShown: false }} />
        <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options={{ title: "Quên mật khẩu" }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: "Đăng ký" }} />
      </Stack.Navigator>
    </NavigationContainer >);
}
