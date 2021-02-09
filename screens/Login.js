import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function Login({ navigation }) {
  return (
    <View>
        <Button title="yes" onPress={() => navigation.navigate('Home')}/>
    </View>
  );
}

const styles = StyleSheet.create({
});
