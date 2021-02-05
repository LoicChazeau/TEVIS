import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default function History() {
  return(
    <View>
        <Text style={styles.text}>History</Text>
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