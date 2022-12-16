import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { IMAGES } from "./ImageListData.component";
export default function Block(props) {
  // const img = require(`../assets/${props.src}.png`);
  const img = IMAGES[props.src].uri;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Image source={img} style={styles.image} />
        <Text>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "45%",
  },
  image: {
    width: 94,
    height: 87,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    borderColor: "#409CFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    backgroundColor: "#FFFFFF",
    textAlign: "center",
  },
});
