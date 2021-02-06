import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Signin() {
  return (
    <View style={styles.square}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>Sign In</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 90,
    height: 40,
    borderRadius: 10,
    borderColor: '#2D9BF0',
    borderStyle: 'solid',
    borderWidth: 3,
    backgroundColor: "#313335",
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    color: "#2D9BF0",
  }
});