import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput, Dimensions } from "react-native";

import Logo from "../components/addcomment/Logo";
import Avatar from "../components/addcomment/Avatar";

export default function Addcomment({ navigation }) {

  const [value, onChangeText] = React.useState('');

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
            <Text style={{ color: 'white', fontSize: 18 }}>NAME NAME NAME</Text>
          </View>

          <View style={{ height: Dimensions.get('window').height*0.3, width: '100%', marginTop: 10 }}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={{ resizeMode: 'contain', height: '100%', width: '100%' }}
            />
          </View>

          <View>
            <Text style={{ color: '#2D9BF0', fontSize: 16, marginTop: 10 }}>Origin link</Text>
          </View>

          <View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Description: </Text>
            <Text style={{ color: 'white', fontSize: 14 }}> Stanley - Tournevis porte embouts + 20 embouts. Tête magnétique pour un maintien efficace et un changement rapide de l'embout. Barillet</Text>
          </View>

          <View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Tag(s): </Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Shoes</Text>
              </View>
              <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Shoes</Text>
              </View>
              <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Shoes</Text>
              </View>
              <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15, justifyContent: 'center' }}>
                <Image
                  source={require("../assets/plus.png")}
                  style={{ resizeMode: 'contain', height: 25, width: 25 }}
                />
              </View>
            </View>
          </View>

          <View>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={{ borderColor: 'gray', borderWidth: 2, width: '95%', borderRadius: 5, backgroundColor: 'white', color: 'gray', fontSize: 18 }}
              onChangeText={text => onChangeText(text)}
              value={value}
              placeholder='Comment...'
            />
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
  }
});