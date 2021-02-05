import React, { FunctionComponent } from "react"
import { ScrollView, SafeAreaView, StyleSheet, View } from "react-native"

import Home from "./view/Home"

const App: FunctionComponent = () => {
  return (
        <View style={style.bg}>
          <Home />
        </View>
  )
}

const style = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#1A1C1E',
  },
})

export default App