import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function AppTitle() {
  return (
    <View>
      <Text style={styles.title}>TIN TRO</Text>
      <Text style={styles.title}>Hệ thống quản lý phòng trọ đáng tin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 27,
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
  },
});
