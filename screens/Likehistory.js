import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import Logo from "../components/history/Logo";

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
          <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 40 }}>
            <RNPickerSelect
              placeholder={{
                label: 'Most recent',
                value: 'Most recent',
              }}
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Least recent", value: "Least recent" },
                { label: "Most rated", value: "Most rated" },
                { label: "Least rated", value: "Least rated" },]} />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 25, justifyContent: "space-around", width: '100%' }}>
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
        <View style={{ flexDirection: "row", marginTop: 35, justifyContent: "space-around", width: '100%', marginBottom: 40 }}>
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