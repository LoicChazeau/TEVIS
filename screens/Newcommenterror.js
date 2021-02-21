import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import Logo from "../components/Logo.js";
import Avatar from "../components/Avatar.js";
import ContainerInfo from "../components/ContainerInfo.js";
import NotFound from "../components/NotFound.js";

export default function Newcommenterror({ navigation }) {
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
        <NotFound />
        <View style={styles.row}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnImage}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnContainerInfo}>
            <ContainerInfo />
          </TouchableOpacity>
        </View>
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
  row: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-around",
    width: '100%'
  },
  BtnImage: {
    flex: 1,
    width: '45%',
    paddingLeft: 25
  },
  image: {
    maxHeight: 160,
    maxWidth: 160,
    resizeMode: 'contain',
    height: 150,
    width: '100%'
  },
  BtnContainerInfo: {
    width: "45%",
    paddingRight: 25,
    flexDirection: 'column'
  }
});