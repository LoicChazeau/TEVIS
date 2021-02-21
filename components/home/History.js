import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function History() {
  return (
    <View style={styles.row}>
      <View style={styles.history}>
        <Text style={styles.text}>History</Text>
      </View>
      <View style={styles.v_image}>
        <Image
          source={require("../../assets/clock.png")}
          style={styles.image} />
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
  row: {
    flexDirection: 'row',
    flex: 1
  },
  history: {
    flex: 2,
    paddingLeft: 20,
    justifyContent: 'center'
  },
  v_image: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 50
  },
  image: {
    width: '75%',
    height: '75%',
    resizeMode: 'contain'
  }
});
