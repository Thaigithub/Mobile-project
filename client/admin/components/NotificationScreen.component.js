import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

export default function NotificationScreen({ navigation }) {
  const tableHead = ["STT", "Địa chỉ", "Ngày", "Tình trạng"];
  const tableBody = [
    ["1", "Quận Bình Thạnh", "Hôm nay", "Chưa đọc"],
    ["2", "Sala, Quận 2", "Hôm qua", "Đã đọc"],
  ];
  return (
    <View style={styles.container}>
      <Table style={styles.table}>
        <Row data={tableHead} style={styles.head} />
        <Rows data={tableBody} style={styles.rows} />
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    backgroundColor: "#D9D9D9",
    height: 38,
  },
  table: {
    textAlign: "center",
    width: "50%",
  },
  rows: {
    height: 38,
  },
});
