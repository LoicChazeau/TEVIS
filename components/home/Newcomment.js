import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Newcomment() {
  return (
    <View style={styles.row}>
      <View style={styles.center}>
        <Image
          source={require("../../assets/comment.png")}
          style={styles.image} />
      </View>
      <View style={styles.comment}>
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
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  center: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '75%',
    height: '75%',
    resizeMode: 'contain'
  },
  comment: {
    flex: 2,
    justifyContent: 'center',
    paddingRight: 15
  }
});
