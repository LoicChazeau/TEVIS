import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Avatar({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginRight: 10, marginTop: 80}}>
        <Image
          source={require("../assets/avatar.png")}
          style={styles.avatar}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 50}}>
        <Image
          source={require("../assets/back.png")}
          style={styles.back}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1C1E",
    alignItems: 'center',
  },
  avatar: {
    height: 400,
    width: 400,
    resizeMode: 'contain',
  },
  back: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});