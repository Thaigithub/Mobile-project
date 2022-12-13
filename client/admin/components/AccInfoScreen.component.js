import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import DisplayCombo from "./DisplayCombo.component";

const DATA = {
    surname: "Nguyen",
    name: "Minh",
    id: "0123456789",
    phone: "0904513316",
    email: "minh.nguyen.quang2909@hcmut.edu.vn",
    username: "minhbk2909",
    password: "*********"
};

export default function AccInfoScreen({ navigator }) {
    return (
        <View style={styles.container}>
            <DisplayCombo title="Họ" value={DATA.surname} />
            <DisplayCombo title="Tên" value={DATA.name} />
            <DisplayCombo title="CMND/CCCD" value={DATA.id} />
            <DisplayCombo title="Số điện thoại" value={DATA.phone} />
            <DisplayCombo title="Email" value={DATA.email} />
            <DisplayCombo title="Tên tài khoản" value={DATA.username} />
            <DisplayCombo title="Mật khẩu" value={DATA.password} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly"
    }
});