import * as React from "react";
import StartScreen from "./StartScreen.component";
import LoginScreen from "./LoginScreen.component";
import ForgotPasswordScreen from "./ForgotPasswordScreen.component";
import SignupScreen from "./SignupScreen.component";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen.component";
import NewRoomScreen from "./NewRoomScreen.component";

const Stack = createNativeStackNavigator();

export default function TopNavStack() {
    return (
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
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Trang chính", headerShown: false }} />
            <Stack.Screen name="NewRoom" component={NewRoomScreen} options={{ title: "Tạo mới phòng trọ" }} />
        </Stack.Navigator>
    );
}
