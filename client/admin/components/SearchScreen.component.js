import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchElement from "./SearchElement.component";

export default function SearchScreen({ navigator }) {
  return (
    <View style={styles.container}>
      <SearchElement />
      <SearchElement />
      <SearchElement />
      <SearchElement />
      <SearchElement />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
});
