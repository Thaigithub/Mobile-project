import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function AppTitle() {
  return (
    <View style={styles.container}>
      <Text>TIN TRO</Text>
      <Text>Hệ thống quản lý phòng trọ đáng tin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 27,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
  },
});
