import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import Logo from "../components/whathot/Logo";
import Title from "../components/whathot/Title";
import Avatar from "../components/whathot/Avatar";

export default function Whathot({ navigation }) {

  const [data, setData] = useState([]);


  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/Pages/", requestOptions)
      .then((response) => response.text())
      .then((result) => setData(JSON.parse(result)["Pages"][0]))
 
      .catch((error) => console.error(error))
      
  }, []);


  return (
    <ScrollView style={{ backgroundColor: "#1A1C1E" }}>
      <View style={styles.container}>

        <View>
          <View style={styles.header}>
            <View style={{ marginRight: 15 }}>
              <Logo />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <Title />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Avatar />
            </View>
          </View>
        </View>
        {data.map(page =>
            <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "space-around", width: '100%' }}>
              <View style={{ flex: 1, width: '45%', paddingLeft: 25 }}>
                <Image
                  source={require("../assets/yeezy.jpeg")}
                  style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: "100%", width: '100%' }}
                />
              </View>
              <View style={{ width: "45%", paddingRight: 25 }}>
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                  <Text style={{ fontSize: 24, textAlign: "center", color: 'white' }}>{page.Name}</Text>
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                  <Image
                    source={require("../assets/comment_orange.png")}
                    style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 80, minWidth: 80}}
                  />
                  <Text style={{ position: "absolute", color: 'white', fontSize: 30, paddingBottom: 12 }}>1251</Text>
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1, flexDirection: 'row' }}>
                  <Text style={{ color: 'white', fontSize: 28, paddingBottom: 5, paddingRight: 8 }}>3.5/5</Text>
                  <Image
                    source={require("../assets/medal.png")}
                    style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 40, minWidth: 40}}
                  />
                </View>
              </View>
            </View>
        )}

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