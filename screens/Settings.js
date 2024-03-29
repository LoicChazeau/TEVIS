
import React, { useState } from 'react';
import { StatusBar, Platform, Switch, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import RNPickerSelect from "react-native-picker-select";

export default function Settings({ navigation }) {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isLoading, setLoading] = useState(true);

  return (
    <SafeAreaView style={styles.Container_set}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.circle}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require("./../assets/logotevis.png")}
            style={{ width: 63, height: 63 }}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.header}>
        <TouchableOpacity style={styles.touchable_back} onPress={() => navigation.goBack()}>
          <Image
            style={styles.back}
            source={require('../assets/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}> Settings</Text>
      </View>
      <View style={styles.subtitle}>
        <Text style={styles.subtitletxt}>Profile :</Text>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btn_txt}>Account Settings</Text>
        <Text style={[styles.btn_txt]}> &gt;</Text>
      </View>
      <Divider style={{ width: "80%", margin: 15 }} />
      <View style={styles.subtitle}>
        <Text style={styles.subtitletxt}>General :</Text>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btn_txt}>Theme</Text>
        <View style={styles.container}>
          <Switch
            trackColor={{ false: "#767577", true: "#F24726" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btn_txt}>Image Loading</Text>
        <View style={styles.container_select}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "On screen", value: "On screen" },
              { label: "On tap", value: "On tap" },
              { label: "Never", value: "Never" },
            ]}
          />
        </View>
      </View>
      <Divider style={{ width: "80%", margin: 15 }} />
      <View style={styles.subtitle}>
        <Text style={styles.subtitletxt}>Support :</Text>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btn_txt}>Account Settings</Text>
        <Text style={[styles.btn_txt]}> &gt;</Text>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btn_txt}>Account Settings</Text>
        <Text style={[styles.btn_txt]}> &gt;</Text>
      </View>
      <Divider style={{ width: "80%", margin: 15 }} />
      <Text style={styles.subtitletxt}>Build Information :</Text>
      <Text style={styles.Build}>01/2021 : MVP 0.01</Text>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  Container_set: {
    flex: 1,
    backgroundColor: "#1A1C1E",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingTop: 15
  },
  circle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderColor: '#2D9BF0',
    borderStyle: 'solid',
    borderWidth: 5,
  },
  header: {
    flex: 0.2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  touchable_back: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "80%",
  },
  back: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  title: {
    paddingStart: "5%",
    color: "white",
    fontSize: 50,
    flex: 1,
    position: "absolute"
  },
  subtitle: {
    flex: 0.1,
    width: "100%",
  },
  subtitletxt: {
    color: "white",
    fontSize: 30,
    textDecorationLine: "underline",
    paddingLeft: "5%",
  },
  btn: {
    flex: 0.1,
    width: "100%",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#2D9BF0",
    color: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "0.05%"
  },
  btn_txt: {
    color: "white",
    fontSize: 25,
    marginLeft: "10%",
    marginRight: "7%"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container_select: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "rgba(255,255,255,0.33)",
    margin: "1%",
  },
  Build: {
    color: "white",
    fontSize: 23,
    textDecorationLine: "underline",
    paddingLeft: "5%",
    marginBottom: 10
  },

})
