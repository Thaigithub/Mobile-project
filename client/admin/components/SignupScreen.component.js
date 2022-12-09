import * as React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import InputCombo from "./InputCombo.component"

export default function SignupScreen({ navigation }) {
    const [id, setId] = React.useState("")
    return (
        <View>
            <InputCombo title="CCCD" handleValueChange={setId} />
            <Text>{id}</Text>
        </View>
    )
}