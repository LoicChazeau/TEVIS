import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, TextInput, Dimensions } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import Avatar from "../components/addcomment/Avatar";

export default function Item({ navigation }) {

  const [value, onChangeText] = React.useState('');

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
            <Text style={{ color: 'white', fontSize: 16, marginRight: 20, marginLeft: 20, textAlign: 'center' }}>name of the product, name of the produc, name of the product</Text>
          </View>

          <View style={{ height: Dimensions.get('window').height * 0.3, width: '100%', marginTop: 10 }}>
            <Image
              source={require("../assets/yeezy.jpeg")}
              style={{ resizeMode: 'contain', height: '100%', width: '100%' }}
            />
          </View>

          <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-around', alignItems: 'center', marginRight: 10, marginLeft: 40 }}>
            <TouchableOpacity style={{ paddingRight: 50 }}>
              <Text style={{ color: '#2D9BF0', fontSize: 16 }}>Origin link</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingRight: 30 }}>
              <Image
                source={require("../assets/like.png")}
                style={{ resizeMode: 'contain', height: 40, width: 40 }}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 30 }}>
              <Text style={{ color: 'white', fontSize: 28 }}>4.7/5</Text>
              <Image
                source={require("../assets/medal.png")}
                style={{ resizeMode: 'contain', height: 35, width: 35, marginTop: 7, paddingLeft: 40 }}
              />
            </View>
          </View>

          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 15 }}>Description: </Text>
            <Text style={{ color: 'white', fontSize: 12, paddingLeft: 10, paddingTop: 8 }}>Stanley - Tournevis porte embouts + 20 embouts. Tête magnétique pour un maintien efficace et un changement rapide de l'embout. Barillet<TouchableOpacity><Text style={{ fontStyle: 'italic', fontSize: 12, fontWeight: 'bold' }}> See more</Text></TouchableOpacity></Text>
          </View>

          <View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14, marginTop: 10, marginLeft: 15 }}>Tag(s): </Text>
            <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 12 }}>
              <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Shoes</Text>
              </View>
              <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Shoes</Text>
              </View>
              <View style={{ backgroundColor: '#F96E4F', padding: 5, borderRadius: 10, marginRight: 15 }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Shoes</Text>
              </View>
            </View>
          </View>

          <View style={{ width: '65%', height: 1, backgroundColor: '#807F7F', marginLeft: "16.25%", marginTop: 20 }}></View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 20, marginLeft: 20, marginRight: 20 }}>
            <View style={{ backgroundColor: '#414BB2', borderRadius: 10, width: '37%', height: 55, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 16 }}>Add comment</Text>
            </View>
            <View>
              <Text style={{ color: 'white' }}>Internet<Text style={{ color: 'white', fontStyle: 'italic', fontWeight: 'bold' }}> need </Text>your opinion</Text>
            </View>
          </View>

          <View style={{ width: '65%', height: 1, backgroundColor: '#807F7F', marginLeft: "16.25%", marginTop: 20 }}></View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', paddingRight: 50 }}>Comments:</Text>
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

          <View style={{ flexDirection: "column", marginTop: 20 }}>
            <View style={{ marginLeft: 30, backgroundColor: '#F96E4F', borderTopLeftRadius: 7, borderTopRightRadius: 7, width: 110, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
              <Text style={{ color: 'white', fontSize: 14, paddingRight: 10 }}>Rated: 4.6</Text>
              <Image
                source={require("../assets/medal.png")}
                style={{ resizeMode: "contain", width: 20, height: 20 }}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", width: '100%', alignItems: 'center' }}>
              <View style={{ flex: 1, width: '80%', marginLeft: 10, marginRight: 10, borderWidth: 3, borderColor: 'gray', borderRadius: 7 }}>
                <Text style={{ color: 'white', padding: 10 }}>Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement
                Il a ses racines dans un morceau de littérature latine classique de 45 avant JC, ce qui en fait plus de 2000 ans.
              Richard McClintock, a recherché l'un des mots latins les plus obscurs, consectetur, d'un passage</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginTop: 20 }}>
            <View style={{ marginLeft: 30, backgroundColor: '#F96E4F', borderTopLeftRadius: 7, borderTopRightRadius: 7, width: 110, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
              <Text style={{ color: 'white', fontSize: 14, paddingRight: 10 }}>Rated: 4.6</Text>
              <Image
                source={require("../assets/medal.png")}
                style={{ resizeMode: "contain", width: 20, height: 20 }}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", width: '100%', alignItems: 'center' }}>
              <View style={{ flex: 1, width: '80%', marginLeft: 10, marginRight: 10, borderWidth: 3, borderColor: 'gray', borderRadius: 7 }}>
                <Text style={{ color: 'white', padding: 10 }}>Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement
                Il a ses racines dans un morceau de littérature latine classique de 45 avant JC, ce qui en fait plus de 2000 ans.
              Richard McClintock, a recherché l'un des mots latins les plus obscurs, consectetur, d'un passage</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginTop: 20 }}>
            <View style={{ marginLeft: 30, backgroundColor: '#F96E4F', borderTopLeftRadius: 7, borderTopRightRadius: 7, width: 110, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
              <Text style={{ color: 'white', fontSize: 14, paddingRight: 10 }}>Rated: 4.6</Text>
              <Image
                source={require("../assets/medal.png")}
                style={{ resizeMode: "contain", width: 20, height: 20 }}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", width: '100%', alignItems: 'center' }}>
              <View style={{ flex: 1, width: '80%', marginLeft: 10, marginRight: 10, borderWidth: 3, borderColor: 'gray', borderRadius: 7 }}>
                <Text style={{ color: 'white', padding: 10 }}>Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement
                Il a ses racines dans un morceau de littérature latine classique de 45 avant JC, ce qui en fait plus de 2000 ans.
              Richard McClintock, a recherché l'un des mots latins les plus obscurs, consectetur, d'un passage</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "column", marginTop: 20 }}>
            <View style={{ marginLeft: 30, backgroundColor: '#F96E4F', borderTopLeftRadius: 7, borderTopRightRadius: 7, width: 110, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
              <Text style={{ color: 'white', fontSize: 14, paddingRight: 10 }}>Rated: 4.6</Text>
              <Image
                source={require("../assets/medal.png")}
                style={{ resizeMode: "contain", width: 20, height: 20 }}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", width: '100%', alignItems: 'center' }}>
              <View style={{ flex: 1, width: '80%', marginLeft: 10, marginRight: 10, borderWidth: 3, borderColor: 'gray', borderRadius: 7 }}>
                <Text style={{ color: 'white', padding: 10 }}>Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement
                Il a ses racines dans un morceau de littérature latine classique de 45 avant JC, ce qui en fait plus de 2000 ans.
              Richard McClintock, a recherché l'un des mots latins les plus obscurs, consectetur, d'un passage</Text>
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
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
  }
});