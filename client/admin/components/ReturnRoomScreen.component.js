import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

export default function ReturnHomeScreen({ navigation }) {
  const tableHead = ["STT", "Địa chỉ", "Vật chất", "Số lượng"];
  const tableBody = [
    ["1", "Quận Bình Thạnh", "Nền gạch", "15"],
    ["2", "Sala, Quận 2", "Cửa sổ", "2"],
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
