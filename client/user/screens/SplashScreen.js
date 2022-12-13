import { View, Text } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SplashScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false
    })
  }, []);
  return (
    <SafeAreaView>
        <View className="flex-1 items-center justify-center">
            <Text>SplashScreen</Text>
        </View>
    </SafeAreaView>
  )
}