import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

export default function Logo() {
  return(
      <View style={styles.circle}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require("../assets/logotevis.png")}
          style={{ width: 54, height: 54 }}
        />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 74,
    height: 74,
    borderRadius: 37,
    borderColor: '#2D9BF0',
    borderStyle: 'solid',
    borderWidth: 5,
}
});