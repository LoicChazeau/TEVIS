import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function History() {
  return (
    <View style={{flexDirection: 'row'}}>

      <View style={{ flex: 1 }}>
        <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>History</Text>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require("../../assets/clock.png")}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
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
  },
});
