import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Settings() {
  return (
    <View>
      <Text style={styles.text}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
});