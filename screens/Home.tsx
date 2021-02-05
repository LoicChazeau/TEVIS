import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import History from "../components/home/History";
import Logo from "../components/home/Logo";
import Newcomment from "../components/home/Newcomment";
import Searchbar from "../components/home/Searchbar";
import Settings from "../components/home/Settings";
import Signin from "../components/home/Signin";
import Whathot from "../components/home/Whathot";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={[{flex: 1}]}></View>
      <View style={[{flex: 2, backgroundColor: "#F96E4F", justifyContent: "center"}]}>
        <Whathot />
      </View>
      <View style={[{flex: 1}]}></View>
      <View style={[{flex: 2, backgroundColor: "#EAC652", justifyContent: "center"}]}>
        <Newcomment />
      </View>
      <View style={[{flex: 1}]}></View>
      <View style={[{flex: 2, backgroundColor: "#EAC652", justifyContent: "center"}]}>
        <History />
      </View>
      <View style={[{flex: 1}]}></View>
      <View style={styles.justify}>
        <Settings />
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
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '10%',
  }
});
