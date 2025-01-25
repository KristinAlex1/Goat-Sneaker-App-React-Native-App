import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home : undefined;
  Details: {productId : string}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Text>App</Text>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})