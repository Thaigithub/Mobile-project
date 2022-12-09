import * as React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import CorneredButton from "./CorneredButton";

/*
TODO: Change all inputs to InputCombo
*/

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState();
  return (
    <View style={styles.container}>
      <View>
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
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
            <Text style={{ textAlign: "right", color: "#FFFFFF" }}>Quên mật khẩu ?</Text>
          </TouchableOpacity>
        </View>
        <Text><br></br></Text>
        <CorneredButton text="Đăng nhập" color="#0040DD" />
        <CorneredButton text="Đăng ký" color="#0A84FF" onPress={() => navigation.navigate("Signup")} />
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
    borderRadius: 5
  },
  inputTitle: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    color: "#FFFFFF",
    padding: 5,
  },
  buttonContainer: {
    padding: 5
  },
  input: {
    padding: 5
  }
});
