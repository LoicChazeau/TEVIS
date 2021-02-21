import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";

import Logo from "../components/Logo.js";
import Avatar from "../components/Avatar.js";

export default function Addcomment({ navigation }) {
  const [value, onChangeText] = React.useState('');
  return (
    <ScrollView style={{ backgroundColor: "#1A1C1E" }}>
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginRight: 15 }}>
              <Logo />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center' }}>
              <Text style={styles.text}>New comment</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ marginLeft: 15 }}>
              <Avatar />
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder='Paste the link or type research here' />
        <TouchableOpacity onPress={() => navigation.navigate('Newcommenterror')} style={{ marginTop: 40 }}>
          <Text style={styles.route}>*Route 1*</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Newcommentresult')} style={{ marginTop: 20 }}>
          <Text style={styles.route}>*Route 2*</Text>
        </TouchableOpacity>
        <Text style={styles.text2}>Type Above and the results will appear here</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1C1E",
    alignItems: 'center',
    paddingTop: 12
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  text: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    width: "80%",
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'gray',
    fontSize: 16,
    padding: 15,
    marginTop: 30
  },
  route: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic'
  },
  text2: {
    color: 'white',
    fontSize: 24,
    marginTop: '30%',
    textAlign: 'center'
  }
});