import React, {useEffect,useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import Logo from "../components/history/Logo";

export default function Commenthistory({ navigation }) {

  const [Comm, setComm] = useState([]);

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

    useEffect(() => {
      fetch("http://127.0.0.1/api/Commentaires", requestOptions)
        .then((response) => response.text())
        .then((result) => setComm(JSON.parse(result)["Commentaires"]))
        .catch((error) => console.error(error))
        
    }, []);  



  return (
    <ScrollView style={{ backgroundColor: "#1A1C1E" }}>
      <View style={styles.container}>

        <View style={{ marginTop: 25, flexDirection: 'column', justifyContent:"center" }}>
          <TouchableOpacity onPress={() => navigation.navigate('Likehistory')} style={{height:"100%",marginLeft:15, alignSelf:"flex-start", justifyContent: 'center', alignItems: 'center', position:"absolute" }}>
            <Image
              source={require("../assets/arrowleft.png")}
              style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: "60%", width: '60%' }}
            />
            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', paddingTop: 7 }}>Like History</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{alignSelf:"center"}}>
            <Logo />
          </TouchableOpacity>
        </View>

        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', paddingTop: 25 }}>Comment History</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 25 }}>
          {/* <TouchableOpacity onPress={() => navigation.navigate('Commenthistory')} style={{ flex: 1 }}> */}
          <Image
            source={require("../assets/back.png")}
            style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: "100%", width: '100%' }}
          />
          {/* </TouchableOpacity> */}
          <RNPickerSelect
            placeholder={{
              label: 'Most recent',
              value: 'Most recent',
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "Least recent", value: "Least recent" },
              { label: "Most rated", value: "Most rated" },
              { label: "Least rated", value: "Least rated" },
            ]}
          />
        </View>

        {Comm.map(commentaire =>
            <View style={{ flexDirection: "column", marginTop: 20 }}>
              <View style={{ marginLeft: 30, backgroundColor: '#F96E4F', borderTopLeftRadius: 7, borderTopRightRadius: 7, width: 110, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
                <Text style={{ color: 'white', fontSize: 14, paddingRight: 10 }}>Rated: {commentaire.Note}</Text>
                <Image
                  source={require("../assets/medal.png")}
                  style={{ resizeMode: "contain", width: 20, height: 20 }}
                />
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around", width: '100%', alignItems: 'center' }}>
                <View style={{ flex: 1, width: '80%', marginLeft: 10, marginRight: 10, borderWidth: 3, borderColor: 'gray', borderRadius: 7 }}>
                  <Text style={{ color: 'white', padding: 10 }}>{commentaire.Content}</Text>
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
    alignItems: '',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
  },
});