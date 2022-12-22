import * as React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function InputCombo(props) {
  return (
    <View style={styles.input}>
      <Text style={styles.inputTitle}>{props.title}</Text>
      <Text style={styles.inputBox}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    borderWidth: 1,
    backgroundColor: "grey",
    borderRadius: 5,
  },
  inputTitle: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    padding: 5,
  },
  input: {
    width: "90%",
  },
});
