import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { StackScreenProps } from '@react-navigation/stack';

import History from "../components/home/History";
import Logo from "../components/home/Logo";
import Newcomment from "../components/home/Newcomment";
import Searchbar from "../components/home/Searchbar";
import Settings from "../components/home/Settings";
import Signin from "../components/home/Signin";
import Whathot from "../components/home/Whathot";

var { width } = Dimensions.get('window');

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={[{ flex: 1 }]}></View>

      <View style={[{ flex: 2, backgroundColor: "#F96E4F", justifyContent: "center" }]}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[{ flex: 1 }]}>
          <Whathot />
        </TouchableOpacity>
      </View>

      <View style={[{ flex: 1 }]}></View>

      <View style={[{ flex: 2, backgroundColor: "#EAC652", justifyContent: "center" }]}>
        <TouchableOpacity style={{ flex: 1 }}>
          <Newcomment />
        </TouchableOpacity>
      </View>

      <View style={[{ flex: 1 }]}></View>

      <View style={[{ flex: 2, backgroundColor: "#EAC652", justifyContent: "center" }]}>
        <TouchableOpacity style={{ flex: 1 }}>
          <History />
        </TouchableOpacity>
      </View>

      <View style={[{ flex: 1 }]}></View>

      <View style={{ flex: 1.8, alignItems: 'center' }}>
        <View style={[{ backgroundColor: "#EAC652", flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20, width: "27%" }]}>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={[{ flex: 1.5 }]}>
            <Settings />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1C1E",
    justifyContent: 'center',
  },
  marginBottom: {
    marginTop: "15%",
  },
  justify: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '10%',
  },
  text: {
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  }
});
