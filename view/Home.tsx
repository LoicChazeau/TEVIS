import { setStatusBarBackgroundColor } from "expo-status-bar"
import React, { FunctionComponent } from "react"
import { Pressable, StyleSheet, View, Text, TextInput } from "react-native"

const Home: FunctionComponent = () => {
  return (
    <View>
      <View style={[style.row, style.top]}>
        <Text style={{ marginLeft: 30, color: '#FFFFFF' }}>LOGO</Text>
        <TextInput style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'center', textAlign: 'center', marginLeft: 43, height: 30, width: 150, borderColor: '#c4c4c4', 
        borderWidth: 2, color : '#000000' , backgroundColor: '#FFFFFF' }} placeholder='What to comment ?' placeholderTextColor='#a8a8a8'/>
        <Text style={{ marginLeft: 60, color: '#FFFFFF' }}>sign in</Text>
      </View>
      <View style={style.orange}>
        <Text style={{marginTop: 50, marginLeft: 150, color: '#FFFFFF'}}>what's hot</Text>
      </View>
      <View style={style.yellow}>
        <Text style={{marginTop: 50, marginLeft: 140, color: '#FFFFFF'}}>new comment</Text>
      </View>
      <View style={style.yellow}>
        <Text style={{marginTop: 50, marginLeft: 160, color: '#FFFFFF'}}>history</Text>
      </View>
      <View>
        <Text style={style.white}>settings</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  white: {
    color: '#FFFFFF',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  top: {
    marginTop: 30,
  },
  orange: {
    marginTop: 50,
    height: 110,
    width: 400,
    backgroundColor: '#F96E4F',
  },
  yellow: {
    marginTop: 50,
    height: 110,
    width: 400,
    backgroundColor: '#EAC652',
  }
})

export default Home