import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Settings() {
  return (
    <View style={styles.col}>
      <View style={styles.v_image}>
        <Image
          source={require("../../assets/settings.png")}
          style={styles.image}/>
      </View>
      <View style={{ flex: 0.5, justifyContent: 'center' }}>
        <Text style={styles.text}>Settings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 7,
  },
  col: {
    flex: 1,
    flexDirection: 'column'
  },
  v_image: {
    flex: 1,
    alignItems: "center",
    marginTop: 10
  },
  image: {
    width: "85%",
    height: "85%",
    resizeMode: 'contain' 
  }
});