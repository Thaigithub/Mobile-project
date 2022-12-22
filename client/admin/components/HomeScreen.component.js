import * as React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Block from "./Block.component";

export default function HomeScreen({ navigation }) {
  const DATA = [
    {
      text: "Danh sách chờ",
      src: "rent_list",
      action: "NewRoom",
    },
    {
      text: "Chỉ số điện nước",
      src: "water",
      action: "Water",
    },
    {
      text: "Yêu cầu trả phòng",
      src: "return_list",
      action: "ReturnRoom",
    },
    {
      text: "Thông báo người thuê",
      src: "bell",
      action: "Notification",
    },
    {
      text: "Yêu cầu sửa chữa",
      src: "repair",
      action: "RepairRequest",
    },
    {
      text: "Liên lạc người thuê",
      src: "comm",
      action: "Communicate",
    },
    {
      text: "Hóa đơn",
      src: "receipt",
      action: "ReceiptList",
    },
    {
      text: "Danh sách dịch vụ",
      src: "service",
      action: "ServiceList",
    },
  ];
  const _renderItem = ({ item }) => {
    return (
      <Block
        text={item.text}
        src={item.src}
        onPress={() => navigation.navigate(item.action)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={_renderItem}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#64D2FF",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
