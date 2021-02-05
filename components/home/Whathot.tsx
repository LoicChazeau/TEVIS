import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Whathot() {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>What's </Text>
        <Text style={styles.text}> HOT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 39,
  }
});