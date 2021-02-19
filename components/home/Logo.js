import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

export default function Logo() {
  return(
      <View style={styles.circle}>
        <Image
          source={require("../../assets/logotevis.png")}
          style={{ width: 63, height: 63 }}
        />
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
    alignItems: 'center',
    marginLeft: 10
}
});