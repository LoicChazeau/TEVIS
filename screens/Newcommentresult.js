import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput, Dimensions } from "react-native";
import Logo from "../components/addcomment/Logo";
import Avatar from "../components/addcomment/Avatar";

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
          style={{ borderColor: 'gray', borderWidth: 2, width: "80%", borderRadius: 5, backgroundColor: 'white', color: 'black', fontSize: 16, padding: 15, marginTop: 20 }}
          value={value} />
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

        <View style={styles.v_comment}>
          <TouchableOpacity onPress={() => navigation.navigate('Addcomment')} style={{ flex: 1 }}>
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
    width: '100%',
    height: '23%',
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
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 35,
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  center: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '75%',
    height: '75%',
    resizeMode: 'contain'
  },
  comment: {
    flex: 2,
    justifyContent: 'center',
    paddingRight: 15
  }
});