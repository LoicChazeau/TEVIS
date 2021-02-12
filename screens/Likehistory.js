import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";


import Logo from "../components/history/Logo";

export default function Likehistory({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#1A1C1E" }}>
      <View style={styles.container}>

        <View style={{ marginTop: 25, flexDirection: 'row', paddingLeft: 117 }}>
          <Logo />
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 25 }}>
            <Image
              source={require("../assets/arrow.png")}
              style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: "60%", width: '60%' }}
            />
            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', paddingTop: 7 }}>Comment History</Text>
          </View>
        </View>

        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', paddingTop: 25 }}>Like History</Text>

      <View style={{ flexDirection: 'row'}}>
        <Image
              source={require("../assets/back.png")}
              style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: "60%", width: '60%' }}
            />

<RNPickerSelect
						onValueChange={(value) => console.log(value)}
						items={[
							{ label: "On screen", value: "On screen" },
							{ label: "On tap", value: "On tap" },
							{ label: "Never", value: "Never" },
						]}
					/>

            </View>




        <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "space-around", width: '100%' }}>
          <View style={{ flex: 1, width: '45%', paddingLeft: 25 }}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: "100%", width: '100%' }}
            />
          </View>
          <View style={{ width: "45%", paddingRight: 25 }}>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
              <Text style={{ fontSize: 24, textAlign: "center", color: 'white' }}>Yeezy 350</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
              <Image
                source={require("../assets/comment_orange.png")}
                style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 80, minWidth: 80 }}
              />
              <Text style={{ position: "absolute", color: 'white', fontSize: 30, paddingBottom: 12 }}>1251</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1, flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontSize: 28, paddingBottom: 5, paddingRight: 8 }}>3.5/5</Text>
              <Image
                source={require("../assets/medal.png")}
                style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 40, minWidth: 40 }}
              />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "space-around", width: '100%' }}>
          <View style={{ flex: 1, width: '45%', paddingLeft: 25 }}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: "100%", width: '100%' }}
            />
          </View>
          <View style={{ width: "45%", paddingRight: 25 }}>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
              <Text style={{ fontSize: 24, textAlign: "center", color: 'white' }}>Yeezy 350</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
              <Image
                source={require("../assets/comment_orange.png")}
                style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 80, minWidth: 80 }}
              />
              <Text style={{ position: "absolute", color: 'white', fontSize: 30, paddingBottom: 12 }}>1251</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1, flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontSize: 28, paddingBottom: 5, paddingRight: 8 }}>3.5/5</Text>
              <Image
                source={require("../assets/medal.png")}
                style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 40, minWidth: 40 }}
              />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "space-around", width: '100%' }}>
          <View style={{ flex: 1, width: '45%', paddingLeft: 25 }}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: "100%", width: '100%' }}
            />
          </View>
          <View style={{ width: "45%", paddingRight: 25 }}>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
              <Text style={{ fontSize: 24, textAlign: "center", color: 'white' }}>Yeezy 350</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
              <Image
                source={require("../assets/comment_orange.png")}
                style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 80, minWidth: 80 }}
              />
              <Text style={{ position: "absolute", color: 'white', fontSize: 30, paddingBottom: 12 }}>1251</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1, flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontSize: 28, paddingBottom: 5, paddingRight: 8 }}>3.5/5</Text>
              <Image
                source={require("../assets/medal.png")}
                style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 40, minWidth: 40 }}
              />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "space-around", width: '100%' }}>
          <View style={{ flex: 1, width: '45%', paddingLeft: 25 }}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: "100%", width: '100%' }}
            />
          </View>
          <View style={{ width: "45%", paddingRight: 25 }}>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
              <Text style={{ fontSize: 24, textAlign: "center", color: 'white' }}>Yeezy 350</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
              <Image
                source={require("../assets/comment_orange.png")}
                style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 80, minWidth: 80 }}
              />
              <Text style={{ position: "absolute", color: 'white', fontSize: 30, paddingBottom: 12 }}>1251</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1, flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontSize: 28, paddingBottom: 5, paddingRight: 8 }}>3.5/5</Text>
              <Image
                source={require("../assets/medal.png")}
                style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 40, minWidth: 40 }}
              />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "space-around", width: '100%' }}>
          <View style={{ flex: 1, width: '45%', paddingLeft: 25 }}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: "100%", width: '100%' }}
            />
          </View>
          <View style={{ width: "45%", paddingRight: 25 }}>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
              <Text style={{ fontSize: 24, textAlign: "center", color: 'white' }}>Yeezy 350</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
              <Image
                source={require("../assets/comment_orange.png")}
                style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 80, minWidth: 80 }}
              />
              <Text style={{ position: "absolute", color: 'white', fontSize: 30, paddingBottom: 12 }}>1251</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", flex: 1, flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontSize: 28, paddingBottom: 5, paddingRight: 8 }}>3.5/5</Text>
              <Image
                source={require("../assets/medal.png")}
                style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 40, minWidth: 40 }}
              />
            </View>
          </View>
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