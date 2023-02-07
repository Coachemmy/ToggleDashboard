import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Menu from './screens/Menu'
import { Provider as PaperProvider } from 'react-native-paper'

const App = () => {
  return (
    <PaperProvider>
      <Menu/>
    </PaperProvider>
  )
}

export default App

const styles = StyleSheet.create({})