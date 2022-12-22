import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

export default function WaterScreen({ navigation }) {
  const tableHead = ["STT", "Địa chỉ", "Hạn thanh toán", "Tình trạng"];
  const tableBody = [
    ["1", "Quận Bình Thạnh", "12/2022", "Chưa thanh toán"],
    ["2", "Sala, Quận 2", "11/2022", "Đã thanh toán"],
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
    width: "90%",
  },
  rows: {
    height: 38,
  },
});
