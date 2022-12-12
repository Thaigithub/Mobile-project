import * as React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Block from "./Block.component";

export default function HomeScreen({ navigation }) {
    const DATA = [
        {
            text: "Danh sách chờ",
            src: "rent_list"
        },
        {
            text: "Chỉ số điện nước",
            src: "water"
        },
        {
            text: "Yêu cầu trả phòng",
            src: "rent_list"
        },
        {
            text: "Thông báo người thuê",
            src: "bell"
        },
        {
            text: "Yêu cầu sửa chữa",
            src: "repair"
        },
        {
            text: "Yêu cầu dịch vụ",
            src: "comm"
        },
        {
            text: "Hóa đơn",
            src: "receipt"
        },
        {
            text: "Danh sách dịch vụ",
            src: "service"
        }
    ];
    const _renderItem = ({ item }) => {
        return (
            <Block text={item.text} src={item.src} />
        );
    };
    return (
        <View style={styles.container}>
            <FlatList data={DATA} renderItem={_renderItem} columnWrapperStyle={{ justifyContent: "space-evenly" }} numColumns={2} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#64D2FF",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
});