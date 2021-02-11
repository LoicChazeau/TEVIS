import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Title() {
  return (
    <View>
      <Text style={styles.text}>What's HOT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  }
});