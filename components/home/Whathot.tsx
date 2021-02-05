import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Whathot() {
  return (
    <View style={{ flexDirection: 'row', flex: 1 }}>

      <View style={{ flex: 0.75, alignItems: 'center', justifyContent: 'center', paddingLeft: 15 }}>
        <Image
          source={require("../../assets/flame.png")}
          style={{ width: '75%', height: '75%', resizeMode: 'contain' }}
        />
      </View>

      <View style={{ flex: 2, paddingRight: 30, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={styles.text}>What's </Text>
          <Text style={styles.text}> HOT</Text>
        </View>
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