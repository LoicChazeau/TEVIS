import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function Avatar() {
  return (
    <View>
      <Image
        source={require("../assets/avatar.png")}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
	avatar: {
		width: 80,
		height: 80,
		resizeMode: 'contain',
		marginRight: 15
	},
});