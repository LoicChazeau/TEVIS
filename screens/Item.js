import React, {useEffect,useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput, Dimensions } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import Avatar from "../components/addcomment/Avatar";

export default function Item({ route, navigation }) {

  const [value, onChangeText] = React.useState('');
  const [info, setInfo] = useState({Tags:["ui","ui"]});
  const [Comm, setComm] = useState([]);
  const [Tri, setTri] = useState("Note");
  const { id } = route.params;

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

    useEffect(() => {
      fetch("http://127.0.0.1/api/Pages/" + JSON.stringify(id), requestOptions)
        .then((response) => response.text())
        .then((result) => setInfo(JSON.parse(result)["Page"]))
        .catch((error) => console.error(error))
        
    }, []);
    
    useEffect(() => {
      fetch("http://127.0.0.1/api/Commentaires/" + JSON.stringify(id), requestOptions)
        .then((response) => response.text())
        .then((result) => setComm(JSON.parse(result)["Commentaires"]))
        .catch((error) => console.error(error))
        
    }, []);    

    
  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
          * and you may want to customize it to your needs
          */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }
  return (
    <ScrollView style={{ backgroundColor: "#1A1C1E" }}>
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 60, height: 60, resizeMode: 'contain', marginRight: 20, marginLeft: 20 }}
              source={require('../assets/back.png')}
            />
          </TouchableOpacity>
          <View>
            <TextInput
              style={{ borderColor: 'gray', borderWidth: 2, borderRadius: 5, backgroundColor: 'white', color: 'gray', fontSize: 15, padding: 15, width: 170, marginRight: 15 }}
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder='What to comment ?'
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ marginRight: 10 }}>
            <Avatar />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20, flexDirection: 'column' }}>
          <View>
            <Text style={{ color: 'white', fontSize: 16, marginRight: 20, marginLeft: 20, textAlign: 'center' }}>{info.Name}</Text>
          </View>

          <View style={{ height: Dimensions.get('window').height * 0.3, width: '100%', marginTop: 10 }}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={{ resizeMode: 'contain', height: '100%', width: '100%' }}
              />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-around', alignItems: 'center', marginRight: 10, marginLeft: 40 }}>
            <TouchableOpacity style={{ paddingRight: 50 }}>
              <Text style={{ color: '#2D9BF0', fontSize: 16 }}>Origin Link </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingRight: 30 }}>
              <Image
                source={require("../assets/like.png")}
                style={{ resizeMode: 'contain', height: 40, width: 40 }}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 30 }}>
              <Text style={{ color: 'white', fontSize: 28 }}>{info.Moyenne}/5</Text>
              <Image
                source={require("../assets/medal.png")}
                style={{ resizeMode: 'contain', height: 35, width: 35, marginTop: 7, paddingLeft: 40 }}
              />
            </View>
          </View>

          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 15 }}>Description: </Text>
            <Text style={{ color: 'white', fontSize: 12, paddingLeft: 10, paddingTop: 8 }}>{info.Description}<TouchableOpacity><Text style={{ fontStyle: 'italic', fontSize: 12, fontWeight: 'bold' }}> See more</Text></TouchableOpacity></Text>
          </View>

          <View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 10, marginLeft: 15 }}>Tag(s): </Text>
            <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 12 }}>
            {info.Tags.map(Tag =>
              <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>{Tag}</Text>
              </View>
            )}
            </View>
          </View>

          <View style={{ width: '65%', height: 1, backgroundColor: '#807F7F', marginLeft: "16.25%", marginTop: 20 }}></View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 20, marginLeft: 20, marginRight: 20 }}>
            <TouchableOpacity  onPress={() => navigation.navigate('Addcomment', {id:info.Id})} style={{ backgroundColor: '#414BB2', borderRadius: 10, width: '37%', height: 55, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 16 }}>Add comment</Text>
            </TouchableOpacity>
            <View>
              <Text style={{ color: 'white' }}>Internet<Text style={{ color: 'white', fontStyle: 'italic', fontWeight: 'bold' }}> need </Text>your opinion</Text>
            </View>
          </View>

          <View style={{ width: '65%', height: 1, backgroundColor: '#807F7F', marginLeft: "16.25%", marginTop: 20 }}></View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', paddingRight: 50 }}>Comments:</Text>
            <RNPickerSelect
              placeholder={{
                label: 'Most rated',
                value: 'Note',
              }}
              onValueChange={(value) => setComm(Comm.sort(dynamicSort(value)))}
              items={[
                { label: "Least rated", value: "-Note" },
                { label: "Least recent", value: "Least recent" },
                { label: "Most recent", value: "Most rated" },
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
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
  }
});