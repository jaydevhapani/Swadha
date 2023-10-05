import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ScreenNavigation from './screens/navigations/screenNavigation'

type Props = {}

const App = (props: Props) => {
  return (
   <NavigationContainer>
    <ScreenNavigation/>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})