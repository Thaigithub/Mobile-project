import * as React from "react";
import { View, StyleSheet } from "react-native";
import Block from "./Block.component";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Block text="Danh sách chờ" src="rent_list" />
            <Block text="Yêu cầu trả phòng" src="return_list" />
            <Block text="Yêu cầu sửa chữa" src="repair" />
            <Block text="Hóa đơn" src="receipt" />
            <Block text="Chỉ số điện nước" src="water" />
            <Block text="Thông báo người thuê" src="bell" />
            <Block text="Yêu cầu dịch vụ" src="comm" />
            <Block text="Danh sách dịch vụ" src="service" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
    }
});