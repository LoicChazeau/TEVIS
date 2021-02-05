import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Settings() {
  return (
    <View style={{ flex: 1, flexDirection: 'column', }}>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 10 }}>
        <Image
          source={require("../../assets/settings.png")}
          style={{ width: "85%", height: "85%", resizeMode: 'contain' }}
        />
      </View>

      <View style={{ flex: 0.5, justifyContent: 'center' }}>
        <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>Settings</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});