import * as React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import ClickableText from "./ClickableText.component";
import CorneredButton from "./CorneredButton";
import InputCombo from "./InputCombo.component";

export default function ForgotPasswordScreen({ navigation }) {
    const [email, setEmail] = React.useState("")
    return (
        <View style={styles.container}>
            <View style={{ width: "25%" }}>
                <InputCombo title="Nhập email:" handleValueChange={setEmail} />
                <CorneredButton text="Lấy lại mật khẩu" color="#0040DD" />
                <View style={{ alignItems: "center" }}>
                    <ClickableText title="Đăng nhập" onPress={() => navigation.navigate("Login")} />
                </View>

            </View>
        </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        padding: 5
    },
    inputTitle: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        padding: 5,
    },
    inputBox: {
        height: 40,
        borderWidth: 1,
        padding: 5,
        backgroundColor: "grey",
        borderRadius: 5
    }
})