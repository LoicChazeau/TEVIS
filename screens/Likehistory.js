import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import Logo from "../components/LogoBig.js";
import ContainerInfo from "../components/ContainerInfo.js";
import PickerSelect from "../components/PickerSelect.js";

export default function Likehistory({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#1A1C1E" }}>
      <View style={styles.container}>
        <View style={{ marginTop: 25, flexDirection: 'row', paddingLeft: 117 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Logo />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Commenthistory')} style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 20 }}>
            <Image
              source={require("../assets/arrowright.png")}
              style={{ resizeMode: 'contain', height: 60, width: 60 }}
            />
            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', paddingTop: 7 }}>Comment History</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', paddingTop: 25 }}>Like History</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/back.png")}
              style={{ resizeMode: 'contain', height: 60, width: 60, marginRight: 40 }}
            />
          </TouchableOpacity>
          <PickerSelect />
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={styles.BtnImage}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={styles.BtnContainerInfo}>
            <ContainerInfo />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={styles.BtnImage}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={styles.BtnContainerInfo}>
            <ContainerInfo />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={styles.BtnImage}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={styles.BtnContainerInfo}>
            <ContainerInfo />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={styles.BtnImage}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={styles.BtnContainerInfo}>
            <ContainerInfo />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={styles.BtnImage}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={styles.BtnContainerInfo}>
            <ContainerInfo />
          </TouchableOpacity>
        </View>

        <View style={[styles.row, { marginBottom: 50 }]}>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={styles.BtnImage}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={styles.BtnContainerInfo}>
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
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  row: {
    flexDirection: "row",
    marginTop: 25,
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