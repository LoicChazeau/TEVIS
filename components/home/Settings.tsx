import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Settings() {
  return (
    <View>
        <View style={styles.button}>
          <Text style={styles.text}>Settings</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 130,
    width: 110,
    backgroundColor: '#EAC652',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    color: '#FFFFFF',
    textAlign: "center",
  },
});