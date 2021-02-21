import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function ContainerInfo() {
  return (
    <View>
      <View style={styles.center}>
        <Text style={styles.name}>Yeezy 350</Text>
      </View>
      <View style={styles.center}>
        <Image
          source={require("../assets/comment_orange.png")}
          style={styles.image}
        />
        <Text style={styles.comments}>1251</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rate}>3.5/5</Text>
        <Image
          source={require("../assets/medal.png")}
          style={styles.medal}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    fontSize: 24,
    textAlign: "center",
    color: 'white'
  },
  image: {
    resizeMode: "contain",
    width: 80,
    height: 80
  },
  comments: {
    position: "absolute",
    color: 'white',
    fontSize: 30,
    paddingBottom: 8
  },
  row: {
    justifyContent: "center",
    flexDirection: 'row'
  },
  rate: {
    color: 'white',
    fontSize: 28,
    paddingBottom: 5,
    paddingRight: 8
  },
  medal: {
    resizeMode: "contain",
    width: 40,
    height: 40
  }
});