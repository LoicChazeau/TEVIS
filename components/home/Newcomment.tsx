import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default function Newcomment() {
  return(
    <View>
        <Text style={styles.text}>New comment</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 36,
  }
});