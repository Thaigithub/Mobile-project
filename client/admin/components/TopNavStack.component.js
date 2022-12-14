import * as React from "react";
import StartScreen from "./StartScreen.component";
import LoginScreen from "./LoginScreen.component";
import ForgotPasswordScreen from "./ForgotPasswordScreen.component";
import SignupScreen from "./SignupScreen.component";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen.component";
import NewRoomScreen from "./NewRoomScreen.component";
import ReturnRoomScreen from "./ReturnRoomScreen.component";
import RepairRequestScreen from "./RepairRequestScreen.component";
import ReceiptListScreen from "./ReceiptListScreen.component";
import WaterScreen from "./WaterScreen.component";
import NotificationScreen from "./NotificationScreen.component";
import ServiceListScreen from "./ServiceListScreen.component";
import CommunicateScreen from "./CommunicateScreen.component";

const Stack = createNativeStackNavigator();

export default function TopNavStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#64D2FF",
        },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 30,
        },
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Đăng nhập", headerShown: false }}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotPasswordScreen}
        options={{ title: "Quên mật khẩu" }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ title: "Đăng ký" }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Trang chính", headerShown: false }}
      />
      <Stack.Screen
        name="NewRoom"
        component={NewRoomScreen}
        options={{ title: "Tạo mới phòng trọ" }}
      />
      <Stack.Screen
        name="ReturnRoom"
        component={ReturnRoomScreen}
        options={{ title: "Danh sách yêu cầu trả phòng" }}
      />
      <Stack.Screen
        name="RepairRequest"
        component={RepairRequestScreen}
        options={{ title: "Danh sách yêu cầu sửa chữa vật chất" }}
      />
      <Stack.Screen
        name="ReceiptList"
        component={ReceiptListScreen}
        options={{ title: "Danh sách hoá đơn" }}
      />
      <Stack.Screen
        name="Water"
        component={WaterScreen}
        options={{ title: "Danh sách chỉ số điện nước" }}
      />
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ title: "Thông báo người thuê" }}
      />
      <Stack.Screen
        name="ServiceList"
        component={ServiceListScreen}
        options={{ title: "Danh sách yêu cầu dịch vụ" }}
      />
      <Stack.Screen
        name="Communicate"
        component={CommunicateScreen}
        options={{ title: "Liên lạc người thuê" }}
      />
    </Stack.Navigator>
  );
}
