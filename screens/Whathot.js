import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import Logo from "../components/whathot/Logo";
import Title from "../components/whathot/Title";
import Avatar from "../components/whathot/Avatar";

export default function Whathot({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#1A1C1E" }}>
      <View style={styles.container}>

        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginRight: 15 }}>
              <Logo />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center' }}>
              <Title />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ marginLeft: 15 }}>
              <Avatar />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 35, justifyContent: "space-around", width: '100%' }}>
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
});