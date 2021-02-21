import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";

import Logo from "../components/Logo.js";
import Avatar from "../components/Avatar.js";
import ContainerInfo from "../components/ContainerInfo.js";

export default function Newcommmentresult({ navigation }) {
  const value = 'https://www.yeezy.com';
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
          value={value} />
        <View style={styles.row2}>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={styles.BtnImage}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={styles.image2}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Item')} style={styles.BtnContainerInfo}>
            <ContainerInfo />
          </TouchableOpacity>
        </View>
        <View style={styles.v_comment}>
          <TouchableOpacity onPress={() => navigation.navigate('Addcomment')}>
            <View style={styles.row}>
              <View style={styles.center}>
                <Image
                  source={require("../assets/comment.png")}
                  style={styles.image} />
              </View>
              <View style={styles.comment}>
                <Text style={styles.text2}>New comment</Text>
              </View>
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
    paddingTop: 12
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  v_comment: {
    width: 375,
    height: 110,
    backgroundColor: "#F96E4F",
    justifyContent: "center",
    marginTop: 35,
  },
  text: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },
  text2: {
    color: 'white',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 35,
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
  row: {
    flexDirection: 'row',
  },
  center: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: 'contain'
  },
  comment: {
    justifyContent: 'center',
    paddingRight: 15,
    paddingBottom: 10
  },
  row2: {
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
  image2: {
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