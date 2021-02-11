import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default function Logo() {
  return(
      <View style={styles.circle}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require("../../assets/logotevis.png")}
          style={{ width: 63, height: 63 }}
        />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderColor: '#2D9BF0',
    borderStyle: 'solid',
    borderWidth: 5,
}
});