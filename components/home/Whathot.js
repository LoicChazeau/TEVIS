import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class Whathot extends React.Component {
	render() {
    return (
        <View style={styles.row}>
          <View style={styles.v_image}>
            <Image source={require("../../assets/flame.png")} style={styles.image}/>
          </View>
          <View style={{ justifyContent: 'center', flex: 2 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text}>What's </Text>
              <Text style={styles.text2}> HOT</Text>
            </View>
          </View>
        </View>
		);
	}
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 39,
  },
  text2: {
    color: '#000000',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 39,
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  v_image: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '75%',
    height: '75%',
    resizeMode: 'contain'
  }
});