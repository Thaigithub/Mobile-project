import * as React from "react"
import { View, Text, TouchableOpacity } from "react-native"

export default function ClickableText(props) {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={{ color: "#409CFF" }}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}