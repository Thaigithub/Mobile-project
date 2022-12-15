import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ClickableText from "./ClickableText.component";
import CorneredButton from "./CorneredButton";
import InputCombo from "./InputCombo.component";

export default function SignupScreen({ navigation }) {
  const [surname, setSurname] = React.useState("");
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={{ width: "25%" }}>
        <InputCombo title="Họ:" handleValueChange={setSurname} />
        <InputCombo title="Tên:" handleValueChange={setName} />
        <InputCombo title="CCCD/CMND:" handleValueChange={setId} />
        <InputCombo title="Số điện thoại:" handleValueChange={setPhone} />
        <InputCombo title="Email:" handleValueChange={setEmail} />
        <InputCombo title="Tên tài khoản: " handleValueChange={setUsername} />
        <InputCombo
          title="Mật khẩu:"
          handleValueChange={setPassword}
          isPassword={true}
        />
        <InputCombo
          title="Xác nhận mật khẩu:"
          handleValueChange={setConfirmPassword}
          isPassword={true}
        />
        <CorneredButton text="Đăng ký" color="#0040DD" />
        <View style={{ alignItems: "center" }}>
          <ClickableText
            title="Đăng nhập"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
