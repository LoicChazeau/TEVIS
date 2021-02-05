import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Newcomment() {
  return (
    <View style={{ flexDirection: 'row', flex: 1 }}>

      <View style={{ flex: 0.75, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require("../../assets/comment.png")}
          style={{ width: '75%', height: '75%', resizeMode: 'contain' }}
        />
      </View>

      <View style={{ flex: 2, justifyContent: 'center', paddingRight: 10}}>
        <Text style={styles.text}>New comment</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 35,
  }
});