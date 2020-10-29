import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen'

import { ENV_VAR } from './env.json'

const App: () => React$Node = () => {
  console.log('===', ENV_VAR, '===')
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.textWrapper}>
        <Text>{ENV_VAR}</Text>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  textWrapper: {
    height: '100%',
    backgroundColor: Colors.lighter,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App
