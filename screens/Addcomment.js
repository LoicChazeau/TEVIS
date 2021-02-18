import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput, Dimensions } from "react-native";
import NumericInput from 'react-native-numeric-input'

import Logo from "../components/addcomment/Logo";
import Avatar from "../components/addcomment/Avatar";

export default function Addcomment({ navigation }) {

  const [value, onChangeText] = React.useState('');
  const [value2, onChangeText2] = React.useState('');

return (
  <ScrollView style={{ backgroundColor: "#1A1C1E" }}>
    <View style={styles.container}>

      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginRight: 15 }}>
            <Logo />
          </TouchableOpacity>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.text}>Add comment</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ marginLeft: 15 }}>
            <Avatar />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 20, flexDirection: 'column' }}>

        <View>
          <Text style={{ color: 'white', fontSize: 16, marginRight: 20, marginLeft: 20, textAlign: 'center' }}>name of the product, name of the produc, name of the product</Text>
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
          <Text style={{ color: 'white', fontSize: 12, paddingLeft: 10, paddingTop: 8 }}>Stanley - Tournevis porte embouts + 20 embouts. Tête magnétique pour un maintien efficace et un changement rapide de l'embout. Barillet<TouchableOpacity><Text style={{ fontStyle: 'italic', fontSize: 12, fontWeight: 'bold' }}> See more</Text></TouchableOpacity></Text>
        </View>

        <View>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 10, marginLeft: 15 }}>Tag(s): </Text>
          <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 12 }}>
            <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15 }}>
              <Text style={{ color: 'white', fontSize: 18, paddingTop: 2 }}>Shoes</Text>
            </View>
            <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15 }}>
              <Text style={{ color: 'white', fontSize: 18, paddingTop: 2 }}>Shoes</Text>
            </View>
            <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15 }}>
              <Text style={{ color: 'white', fontSize: 18, paddingTop: 2 }}>Shoes</Text>
            </View>
            <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15, justifyContent: 'center' }}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/plus.png")}
                  style={{ resizeMode: 'contain', height: 25, width: 25 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <TextInput
            multiline={true}
            numberOfLines={5}
            style={{ borderColor: 'gray', borderWidth: 2, width: '95%', borderRadius: 5, backgroundColor: 'white', color: 'gray', fontSize: 18, padding: 15 }}
            onChangeText={text => onChangeText(text)}
            value={value}
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
          numeric
          keyboardType={'numeric'}
        />
          </View>
          <View>
          <Image
            source={require("../assets/medal.png")}
            style={{ width: 30, height: 30, resizeMode: 'contain', paddingLeft: 50 }}
          />
          </View>
        </View>

        <View style={{ backgroundColor: "#F96E4F", marginTop: 25, width: '100%', height: '13%', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', marginLeft: 30, marginRight: 30 }}>
            <View style={{ flex: 0.75 }}>
              <Image
                source={require("../assets/flame.png")}
                style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 46, color: 'white', fontWeight: 'bold' }}>Post</Text>
            </View>
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
  text: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },
});