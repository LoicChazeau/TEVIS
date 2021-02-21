import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, Dimensions, ListItem } from "react-native";
import Logo from "../components/addcomment/Logo";
import Avatar from "../components/addcomment/Avatar";
import { text } from "body-parser";
import { Input } from "react-native-elements";

export default function Addcomment({ navigation }) {

  const [value, onChangeText] = React.useState('');



  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);


  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  useEffect(() => {
    fetch("http://127.0.0.1/api/Pages", requestOptions)
    .then((response) => response.text())
    .then((result) =>  setData(JSON.parse(result)["Pages"]))
    .catch((error) => console.error(error))
    .finally
      
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1/api/Pages", requestOptions)
    .then((response) => response.text())
    .then((result) =>  setfilteredData(JSON.parse(result)["Pages"]))
    .catch((error) => console.error(error))
    .finally
      
  }, []);

  function SearchPage(text){
    setfilteredData(
        data.filter(i=>
            i.Name.toLowerCase().includes(text.toLowerCase()) || i.Link.toLowerCase().includes(text.toLowerCase())  
        )

    )
  }
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
        <Input
          style={{ borderColor: 'gray', borderWidth: 2, width: "80%", borderRadius: 5, backgroundColor: 'white', color: 'gray', fontSize: 16, padding: 15, marginTop: 30 }}
          onChangeText={text => {SearchPage(text), onChangeText(text) }}
          value={value}
          placeholder='Paste the link or type research here' />

        {filteredData.map(page =>
                    <TouchableOpacity onPress={() => navigation.navigate('Addcomment', {id:page.Id})} style={{ flexDirection: "row", marginTop: 30, justifyContent: "space-around", width: '100%' }}>
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
                        <Text style={{ position: "absolute", color: 'white', fontSize: 30, paddingBottom: 12 }}>{page.Commentaires}</Text>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: "center", flex: 1, flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontSize: 28, paddingBottom: 5, paddingRight: 8 }}>{page.Moyenne}/5</Text>
                        <Image
                            source={require("../assets/medal.png")}
                            style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 40, minWidth: 40}}
                        />
                        </View>
                    </View>
                    </TouchableOpacity>
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
  text: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },
});