import * as React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import SplashScreen from "./SplashScreen.component";

export default function LoginScreen() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState();
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Tên đăng nhập</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={setUsername}
            value={username}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Mật khẩu</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <View style={styles.button}>
          <Button onPress={undefined} title="Đăng nhập" color="#0040DD" />
        </View>
        <View style={styles.button}>
          <Button onPress={undefined} title="Đăng ký" color="#0A84FF" />
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
  text: {},
  loginText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 34,
    color: "#FFFFFF",
    padding: 5,
  },
  inputBox: {
    height: 40,
    borderWidth: 1,
    padding: 5,
    backgroundColor: "grey",
  },
  inputTitle: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    color: "#FFFFFF",
    padding: 5,
  },
  button: {
    padding: 5,
  },
});
