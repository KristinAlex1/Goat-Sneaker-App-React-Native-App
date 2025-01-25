import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../src/App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Homeprops = NativeStackScreenProps<RootStackParamList,'Home'>

const Home = ({navigation}: Homeprops) => {
  return (
    <View>
      <FlatList
        
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})