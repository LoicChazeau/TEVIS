import React, {useEffect,useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput, Dimensions } from "react-native";
import NumericInput from 'react-native-numeric-input'
import { connect } from 'react-redux'
import Logo from "../components/addcomment/Logo";
import Avatar from "../components/addcomment/Avatar";
import Firebase from '../config/Firebase'
export default function Addcomment({ route,navigation }) {

  const [value, onChangeText] = React.useState('');
  const [value2, onChangeText2] = React.useState('');
  const [Note, setNote] = React.useState('');
  const [Commentaire, setCommentaire] = React.useState('');
  const [NewTag, setNewTag] = useState(false);
  const [contentNewTag, setContNewTag] = useState(false);
  const { id } = route.params;

  const { currentUser } = Firebase.auth(); //we are getting the user from Firebase
  const [info, setInfo] = useState({Tags:["ui","ui"]});

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

    function Notetri (text) {
      text = text.replace(/[^0-5]/g, '').substring(0,1);
      setNote(text)
    }



    function Post () {
      var formdata = new FormData();
      formdata.append("Page_id", info.Id);
      formdata.append("User_id", );
      formdata.append("Content", Commentaire);
      formdata.append("Note", Note);
      formdata.append("Tags", info.Tags);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1/api/Commentaires", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
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
            <Text style={styles.text}>Add comment { currentUser.uid} </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ marginLeft: 15 }}>
            <Avatar />
          </TouchableOpacity>
        </View>
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
        
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Text style={{ color: '#2D9BF0', fontSize: 16, marginTop: 10 }}>Origin link</Text>
        </TouchableOpacity>

        <View style={{ marginLeft: 15 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 15 }}>Description: </Text>
          <Text style={{ color: 'white', fontSize: 12, paddingLeft: 10, paddingTop: 8 }}>{info.Description}<TouchableOpacity><Text style={{ fontStyle: 'italic', fontSize: 12, fontWeight: 'bold' }}> See more</Text></TouchableOpacity></Text>
        </View>

        <View>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 10, marginLeft: 15 }}>Tag(s): </Text>
          <View style={{ flexDirection: 'row', flexWrap:'wrap', marginLeft: 25, marginTop: 12 }}>
          {info.Tags.map(Tag =>
              <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>{Tag}</Text>
              </View>
            )}
            {NewTag == false
             ?
            <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15, justifyContent: 'center' }}>
              <TouchableOpacity
              onPress={() => {setNewTag(true), setContNewTag(null )}}
              >
                <Image
                  source={require("../assets/plus.png")}
                  style={{ resizeMode: 'contain', height: 25, width: 25 }}
                />
              </TouchableOpacity>
            </View>
            
            :

            <View style={{ flexDirection: 'row'}}> 
            <TextInput
            style={{ borderColor: 'gray', borderWidth: 1, width: '55%', borderRadius: 5, backgroundColor: 'white', color: 'gray', fontSize: 18, padding: 15 }}
            placeholder='New Tag'
            onChangeText={text => setContNewTag(text)}
            />

            <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginHorizontal: 15, justifyContent: 'center' }}>
              <TouchableOpacity
              onPress={() => {setNewTag(false), setContNewTag(null )}}
              >
                <Image
                  source={require("../assets/back.png")}
                  style={{ resizeMode: 'contain', height: 25, width: 25 }}
                />
              </TouchableOpacity>
            </View>
            
            <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15, justifyContent: 'center' }}>
              <TouchableOpacity
              onPress={() => {setNewTag(false), info.Tags.push(contentNewTag), console.log(info.Tags)}}
              >
                <Image
                  source={require("../assets/tick.png")}
                  style={{ resizeMode: 'contain', height: 25, width: 25 }}
                />
              </TouchableOpacity>
            </View>
            </View>
            }
            
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <TextInput
            multiline={true}
            numberOfLines={5}
            style={{ borderColor: 'gray', borderWidth: 2, width: '95%', borderRadius: 5, backgroundColor: 'white', color: 'gray', fontSize: 18, padding: 15 }}
            onChangeText={text => setCommentaire(text)}
            placeholder='Comment...'
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <View>
          <Text style={{ color: 'white', fontSize: 20, paddingRight: 15, fontWeight: 'bold' }}>Your note:</Text>
          </View>
          <View>
          <TextInput
          style={{ width: 60, padding: 16, backgroundColor: 'white', borderWidth: 2, borderColor: 'gray', borderRadius: 5 }}
          placeholderTextColor='gray'
          placeholder='.../5'
          onChangeText={text => Notetri(text)}
          numeric
          keyboardType={'numeric'}
          />
          </View>
            <Text style={{color:"white", fontSize: 20, fontWeight: 'bold', marginLeft:1}}> { Note }/5</Text>
          <View>
          <Image
            source={require("../assets/medal.png")}
            style={{ width: 30, height: 30, resizeMode: 'contain', paddingLeft: 50 }}
          />
          </View>
        </View>

        <View style={{ backgroundColor: "#F96E4F", marginTop: 25, width: '100%', height: '13%', justifyContent: 'center', marginBottom:10 }}>
          <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 30, marginRight: 30, paddingLeft: 50 }}
          onPress={() => {
            console.log ( 
              "Pages.id : "+ info.Id +
              " UserId : "+ 1 +
              " Content : "+ Commentaire +
              " Note : "+ Note +
              "TAG : "+ info.Tags
            ),
            Post(),
            navigation.navigate('Item', {id:info.Id})
            }}
          >
            <View style={{ width: '40%' }}>
              <Image
                source={require("../assets/post.png")}
                style={{ width: '100%', height: '100%', resizeMode: 'contain', }}
              />
            </View>
              <Text style={{ fontSize: 46, color: 'white', fontWeight: 'bold' }}>Post</Text>
          </TouchableOpacity>
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
  text: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },
});