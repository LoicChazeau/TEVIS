import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function ContainerComment() {
  return (
    <View style={styles.col}>
      <View style={styles.v_rate}>
        <Text style={styles.rate}>Rated: 4.6</Text>
        <Image
          source={require("../assets/medal.png")}
          style={{ resizeMode: "contain", width: 20, height: 20 }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around", width: '100%', alignItems: 'center' }}>
        <View style={{ flex: 1, width: '80%', marginLeft: 10, borderWidth: 3, borderColor: 'gray', borderRadius: 7 }}>
          <Text style={{ color: 'white', padding: 10 }}>Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement
          Il a ses racines dans un morceau de littérature latine classique de 45 avant JC, ce qui en fait plus de 2000 ans.
        Richard McClintock, a recherché l'un des mots latins les plus obscurs, consectetur, d'un passage</Text>
        </View>
        <View style={{ width: 50, height: 50, marginRight: 15, marginLeft: 7, borderWidth: 2, borderColor: 'gray', borderRadius: 10, alignItems: 'center' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image
              source={require("../assets/eye.png")}
              style={{ resizeMode: 'contain', height: 26, width: 26 }}
            />
            <Text style={{ color: '#F96E4F' }}>View</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  col: {
    flexDirection: "column",
    marginTop: 20
  },
  v_rate: {
    marginLeft: 30,
    backgroundColor: '#F96E4F',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    width: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  rate: {
    color: 'white',
    fontSize: 14,
    paddingRight: 10
  },
  medal: {

  },
  row: {

  },
  v_comment: {

  },
  comment: {

  },
  v_view: {

  },
  v_eye: {

  },
  eye: {

  }
});