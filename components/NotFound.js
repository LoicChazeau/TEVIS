import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native'

export default function NotFound() {
  const value = 'https://www.yeesy.com';
  return (
    <View style={styles.center}>
      <TextInput
        style={styles.input}
        value={value} />
      <Text style={styles.NotFound}>Oops, it seems like this page doesn't already exist, do you want to create it ?</Text>
      <View style={styles.BtnCreate}>
        <TouchableOpacity>
          <Text style={styles.text}>Create new page</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator}></View>
      <Text style={styles.suggestion}>Or maybe were you searching for this ?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    width: "80%",
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 16,
    padding: 15,
    marginTop: 20
  },
  NotFound: {
    color: 'white',
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  BtnCreate: {
    backgroundColor: "#F96E4F",
    marginTop: 25,
    width: '100%',
    height: 70,
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  separator: {
    width: '65%',
    height: 1,
    backgroundColor: '#807F7F',
    marginTop: 25
  },
  suggestion: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40
  }
});