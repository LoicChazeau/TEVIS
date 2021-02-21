import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput, Dimensions } from "react-native";
import Logo from "../components/addcomment/Logo";
import Avatar from "../components/addcomment/Avatar";

export default function Newcommenterror({ navigation }) {

  const value = 'https://www.yeesy.com';

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
          style={{ borderColor: 'gray', borderWidth: 2, width: "80%", borderRadius: 5, backgroundColor: 'white', color: 'black', fontSize: 16, padding: 15, marginTop: 20 }}
          value={value} />
        <Text style={{ color: 'white', fontSize: 22, marginTop: 20, textAlign: 'center', marginLeft: 20, marginRight: 20 }}>Oops, it seems like this page doesn't already exist, do you want to create it ?</Text>
        <View style={{ backgroundColor: "#F96E4F", marginTop: 25, width: '100%', height: '13%', justifyContent: 'center' }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 36, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Create new page</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '65%', height: 1, backgroundColor: '#807F7F', marginTop: 25 }}></View>
        <Text style={{ color: 'white', fontSize: 22, marginTop: 25, textAlign: 'center', marginLeft: 40, marginRight: 40 }}>Or maybe were you searching for this ?</Text>
        <View style={{ flexDirection: "row", marginTop: 25, justifyContent: "space-around", width: '100%', marginBottom: 0 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={{ flex: 1, width: '45%', paddingLeft: 25 }}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: 150, width: '100%' }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={{ width: "45%", paddingRight: 25, flexDirection: 'column' }}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 24, textAlign: "center", color: 'white' }}>Yeezy 350</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/comment_orange.png")}
                style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 80, minWidth: 80 }}
              />
              <Text style={{ position: "absolute", color: 'white', fontSize: 30, paddingBottom: 8 }}>1251</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontSize: 28, paddingBottom: 5, paddingRight: 8 }}>3.5/5</Text>
              <Image
                source={require("../assets/medal.png")}
                style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 40, minWidth: 40 }}
              />
            </View>
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
  text: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },
});