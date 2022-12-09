import * as React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import CorneredButton from "./CorneredButton";

export default function ForgotPasswordScreen({ navigation }) {
    const [email, setEmail] = React.useState("")
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.input}>
                    <Text style={styles.inputTitle}>Nhập email:</Text>
                    <TextInput
                        style={styles.inputBox}
                        onChangeText={setEmail}
                        value={email}
                    />
                </View>
                <CorneredButton text="Lấy lại mật khẩu" color="#0040DD" />
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{ textAlign: "center", color: "#409CFF" }}>Đăng nhập</Text>
                </TouchableOpacity>
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