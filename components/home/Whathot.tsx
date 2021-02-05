import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default function Whathot() {
  return(
    <View>
        <Text style={styles.text}>What's HOT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight: "bold",
  }
});