import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import Logo from "../components/history/Logo";

export default function Commenthistory({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#1A1C1E" }}>
      <View style={styles.container}>

        <View style={{ marginTop: 25, flexDirection: 'row', paddingRight: 105 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Likehistory')} style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 35 }}>
            <Image
              source={require("../assets/arrowleft.png")}
              style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: "60%", width: '60%' }}
            />
            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', paddingTop: 7 }}>Like History</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Logo />
          </TouchableOpacity>
        </View>

        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', paddingTop: 25 }}>Comment History</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
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

        <View style={{ flexDirection: "column", marginTop: 20 }}>
            <View style={{ marginLeft: 30, backgroundColor: '#F96E4F', borderTopLeftRadius: 7, borderTopRightRadius: 7, width: 110, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 5, paddingBottom: 5 }}>
              <Text style={{ color: 'white', fontSize: 14, paddingRight: 10 }}>Rated: 4.6</Text>
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
            <View style={{
              width: 50, height: 50, marginRight: 15, marginLeft: 7, borderWidth: 2,
              borderColor: 'gray', borderRadius: 10, alignItems: 'center'
            }}>
              <View style={{ flexDirection: 'column', paddingTop: 5 }}>
                <Image
                  source={require("../assets/eye.png")}
                  style={{ resizeMode: 'contain', height: "100%", width: '100%' }}
                />
                <Text style={{ color: '#F96E4F' }}>View</Text>
              </View>
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
            <View style={{ flex: 1, width: '80%', marginLeft: 10, borderWidth: 3, borderColor: 'gray', borderRadius: 7 }}>
              <Text style={{ color: 'white', padding: 10 }}>Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement
              Il a ses racines dans un morceau de littérature latine classique de 45 avant JC, ce qui en fait plus de 2000 ans.
              Richard McClintock, a recherché l'un des mots latins les plus obscurs, consectetur, d'un passage</Text>
            </View>
            <View style={{
              width: 50, height: 50, marginRight: 15, marginLeft: 7, borderWidth: 2,
              borderColor: 'gray', borderRadius: 10, alignItems: 'center'
            }}>
              <View style={{ flexDirection: 'column', paddingTop: 5 }}>
                <Image
                  source={require("../assets/eye.png")}
                  style={{ resizeMode: 'contain', height: "100%", width: '100%' }}
                />
                <Text style={{ color: '#F96E4F' }}>View</Text>
              </View>
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
            <View style={{ flex: 1, width: '80%', marginLeft: 10, borderWidth: 3, borderColor: 'gray', borderRadius: 7 }}>
              <Text style={{ color: 'white', padding: 10 }}>Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement
              Il a ses racines dans un morceau de littérature latine classique de 45 avant JC, ce qui en fait plus de 2000 ans.
              Richard McClintock, a recherché l'un des mots latins les plus obscurs, consectetur, d'un passage</Text>
            </View>
            <View style={{
              width: 50, height: 50, marginRight: 15, marginLeft: 7, borderWidth: 2,
              borderColor: 'gray', borderRadius: 10, alignItems: 'center'
            }}>
              <View style={{ flexDirection: 'column', paddingTop: 5 }}>
                <Image
                  source={require("../assets/eye.png")}
                  style={{ resizeMode: 'contain', height: "100%", width: '100%' }}
                />
                <Text style={{ color: '#F96E4F' }}>View</Text>
              </View>
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
            <View style={{ flex: 1, width: '80%', marginLeft: 10, borderWidth: 3, borderColor: 'gray', borderRadius: 7 }}>
              <Text style={{ color: 'white', padding: 10 }}>Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement
              Il a ses racines dans un morceau de littérature latine classique de 45 avant JC, ce qui en fait plus de 2000 ans.
              Richard McClintock, a recherché l'un des mots latins les plus obscurs, consectetur, d'un passage</Text>
            </View>
            <View style={{
              width: 50, height: 50, marginRight: 15, marginLeft: 7, borderWidth: 2,
              borderColor: 'gray', borderRadius: 10, alignItems: 'center'
            }}>
              <View style={{ flexDirection: 'column', paddingTop: 5 }}>
                <Image
                  source={require("../assets/eye.png")}
                  style={{ resizeMode: 'contain', height: "100%", width: '100%' }}
                />
                <Text style={{ color: '#F96E4F' }}>View</Text>
              </View>
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
            <View style={{ flex: 1, width: '80%', marginLeft: 10, borderWidth: 3, borderColor: 'gray', borderRadius: 7 }}>
              <Text style={{ color: 'white', padding: 10 }}>Contrairement à la croyance populaire, Lorem Ipsum n'est pas simplement
              Il a ses racines dans un morceau de littérature latine classique de 45 avant JC, ce qui en fait plus de 2000 ans.
              Richard McClintock, a recherché l'un des mots latins les plus obscurs, consectetur, d'un passage</Text>
            </View>
            <View style={{
              width: 50, height: 50, marginRight: 15, marginLeft: 7, borderWidth: 2,
              borderColor: 'gray', borderRadius: 10, alignItems: 'center'
            }}>
              <View style={{ flexDirection: 'column', paddingTop: 5 }}>
                <Image
                  source={require("../assets/eye.png")}
                  style={{ resizeMode: 'contain', height: "100%", width: '100%' }}
                />
                <Text style={{ color: '#F96E4F' }}>View</Text>
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
});