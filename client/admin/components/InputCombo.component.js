import * as React from "react"
import { Text, View, StyleSheet, TextInput } from "react-native"

export default function InputCombo(props) {
    const [value, setValue] = React.useState("")
    return (
        <View>
            <Text>{props.title}</Text>
            <TextInput style={{ borderWidth: 2 }} onChangeText={(value) => props.handleValueChange(value)} />
        </View>
    )
}