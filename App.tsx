import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './style/home';

export default function App() {
  return (
    <View style={styles.centerRowAligment, styles.test}>
      <Text>Opeorking your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
