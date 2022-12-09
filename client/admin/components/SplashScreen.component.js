import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import AppTitle from "./AppTitle.component";
import Logo from "./Logo.component";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Logo style={styles.logo} />
        <View style={styles.text}>
          <AppTitle />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#64D2FF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 1,
  },
  text: {
    bottom: -20,
  },
  block: {
    alignItems: "center",
  },
});
