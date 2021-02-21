import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import Logo from "../components/LogoBig.js";
import PickerSelect from "../components/PickerSelect.js";
import ContainerComment from "../components/ContainerComment.js";

export default function Commenthistory({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#1A1C1E" }}>
      <View style={styles.container}>
        <View style={{ marginTop: 25, flexDirection: 'row', paddingRight: 105 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Likehistory')} style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 35 }}>
            <Image
              source={require("../assets/arrowleft.png")}
              style={{ resizeMode: 'contain', height: 60, width: 60 }}
            />
            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', paddingTop: 7 }}>Like History</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Logo />
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', paddingTop: 25 }}>Comment History</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/back.png")}
              style={{ resizeMode: 'contain', height: 60, width: 60, marginRight: 40 }}
            />
          </TouchableOpacity>
          <PickerSelect />
        </View>
          <ContainerComment />
          <ContainerComment />
          <ContainerComment />
          <ContainerComment />
          <ContainerComment />
          <ContainerComment />
          <ContainerComment />
          <ContainerComment />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1C1E",
    alignItems: 'center',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
  },
});