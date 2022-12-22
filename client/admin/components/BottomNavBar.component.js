import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchScreen from "./SearchScreen.component";
import AccInfoScreen from "./AccInfoScreen.component";
import SettingScreen from "./SettingScreen.component";
import TopNavStack from "./TopNavStack.component";

const Tab = createBottomTabNavigator();

export default function BottomNavBar(props) {
    return (
        <Tab.Navigator screenOptions={{
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontSize: 28
            },
            headerStyle: {
                backgroundColor: "#70D7FF"
            }
        }}>
            <Tab.Screen name="Home" component={TopNavStack} options={{ tabBarLabel: "Trang chủ", tabBarIcon: ({ size, color }) => (<Icon name="home" color={color} size={size} />), headerShown: false }} />
            <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarLabel: "Tìm kiếm", tabBarIcon: ({ size, color }) => (<Icon name="search" color={color} size={size} />), headerShown: false }} />
            <Tab.Screen name="AccInfo" component={AccInfoScreen} options={{ tabBarLabel: "Tài khoản", tabBarIcon: ({ size, color }) => (<Icon name="user" color={color} size={size} />), title: "Thông tin người dùng" }} />
            <Tab.Screen name="Setting" component={SettingScreen} options={{ tabBarLabel: "Cài đặt", tabBarIcon: ({ size, color }) => (<Icon name="gear" color={color} size={size} />), title: "Cài đặt" }} />
        </Tab.Navigator>
    );
}