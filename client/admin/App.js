import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./components/Logo.component";
import AppTitle from "./components/AppTitle.component";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Logo />
      <AppTitle />
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
});
