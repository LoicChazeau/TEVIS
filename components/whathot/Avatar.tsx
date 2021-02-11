import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default function Logo({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Image
        source={require("../../assets/avatar.png")}
        style={styles.avatar}
      />
    </TouchableOpacity>
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