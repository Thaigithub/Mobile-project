import * as React from "react"
import { View, Text, TouchableOpacity } from "react-native"

export default function CorneredButton(props) {
    return (
        <View style={{ padding: 5 }}>
            <TouchableOpacity style={{ alignItems: "center", padding: 5, backgroundColor: props.color, borderRadius: 23 }}>
                <Text style={{ color: "#FFFFFF" }}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
}