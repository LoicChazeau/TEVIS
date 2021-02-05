import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function History() {
  return (
    <View style={{flexDirection: 'row', flex: 1}}>

      <View style={{ flex:2, paddingLeft: 20, justifyContent: 'center' }}>
        <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>History</Text>
      </View>

      <View style={{ flex: 0.75, alignItems: 'center', justifyContent: 'center', paddingRight: 50 }}>
        <Image
          source={require("../../assets/clock.png")}
          style={{ width: '75%', height: '75%', resizeMode: 'contain' }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 39,
    justifyContent: "center",
    alignItems: "center",
  },
});
