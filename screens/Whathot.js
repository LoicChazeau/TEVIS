import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { connect } from 'react-redux'

import Logo from "../components/whathot/Logo";
import Title from "../components/whathot/Title";

class Whathot extends React.Component {
  render() {
    if (this.props.user.email == null) {
      var login =
        <View style={styles.signin}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.square}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }} >
              <Text style={styles.text}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
    } else {
      var login =
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.avatar}
          />
        </TouchableOpacity>
    }
    return (
      <ScrollView style={{ backgroundColor: "#1A1C1E" }}>
        <View style={styles.container}>

          <View>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ marginRight: 15 }}>
                <Logo />
              </TouchableOpacity>
              <View style={{ justifyContent: 'center' }}>
                <Title />
              </View>
              <View>{login}</View>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 25, justifyContent: "space-around", width: '100%' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={{ flex: 1, width: '45%', paddingLeft: 25 }}>
              <Image
                source={require("../assets/yeezy.jpeg")}
                style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: 150, width: '100%' }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={{ width: "45%", paddingRight: 25, flexDirection: 'column' }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 24, textAlign: "center", color: 'white' }}>Yeezy 350</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/comment_orange.png")}
                  style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 80, minWidth: 80 }}
                />
                <Text style={{ position: "absolute", color: 'white', fontSize: 30, paddingBottom: 8 }}>1251</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center", flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 28, paddingBottom: 5, paddingRight: 8 }}>3.5/5</Text>
                <Image
                  source={require("../assets/medal.png")}
                  style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 40, minWidth: 40 }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: 35, justifyContent: "space-around", width: '100%' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={{ flex: 1, width: '45%', paddingLeft: 25 }}>
              <Image
                source={require("../assets/yeezy.jpeg")}
                style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: 150, width: '100%' }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={{ width: "45%", paddingRight: 25, flexDirection: 'column' }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 24, textAlign: "center", color: 'white' }}>Yeezy 350</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/comment_orange.png")}
                  style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 80, minWidth: 80 }}
                />
                <Text style={{ position: "absolute", color: 'white', fontSize: 30, paddingBottom: 8 }}>1251</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center", flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 28, paddingBottom: 5, paddingRight: 8 }}>3.5/5</Text>
                <Image
                  source={require("../assets/medal.png")}
                  style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 40, minWidth: 40 }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: 35, justifyContent: "space-around", width: '100%' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={{ flex: 1, width: '45%', paddingLeft: 25 }}>
              <Image
                source={require("../assets/yeezy.jpeg")}
                style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: 150, width: '100%' }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={{ width: "45%", paddingRight: 25, flexDirection: 'column' }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 24, textAlign: "center", color: 'white' }}>Yeezy 350</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/comment_orange.png")}
                  style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 80, minWidth: 80 }}
                />
                <Text style={{ position: "absolute", color: 'white', fontSize: 30, paddingBottom: 8 }}>1251</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center", flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 28, paddingBottom: 5, paddingRight: 8 }}>3.5/5</Text>
                <Image
                  source={require("../assets/medal.png")}
                  style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 40, minWidth: 40 }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: 35, justifyContent: "space-around", width: '100%' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={{ flex: 1, width: '45%', paddingLeft: 25 }}>
              <Image
                source={require("../assets/yeezy.jpeg")}
                style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: 150, width: '100%' }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={{ width: "45%", paddingRight: 25, flexDirection: 'column' }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 24, textAlign: "center", color: 'white' }}>Yeezy 350</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/comment_orange.png")}
                  style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 80, minWidth: 80 }}
                />
                <Text style={{ position: "absolute", color: 'white', fontSize: 30, paddingBottom: 8 }}>1251</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center", flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 28, paddingBottom: 5, paddingRight: 8 }}>3.5/5</Text>
                <Image
                  source={require("../assets/medal.png")}
                  style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 40, minWidth: 40 }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: 35, justifyContent: "space-around", width: '100%' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={{ flex: 1, width: '45%', paddingLeft: 25 }}>
              <Image
                source={require("../assets/yeezy.jpeg")}
                style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: 150, width: '100%' }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={{ width: "45%", paddingRight: 25, flexDirection: 'column' }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 24, textAlign: "center", color: 'white' }}>Yeezy 350</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/comment_orange.png")}
                  style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 80, minWidth: 80 }}
                />
                <Text style={{ position: "absolute", color: 'white', fontSize: 30, paddingBottom: 8 }}>1251</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center", flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 28, paddingBottom: 5, paddingRight: 8 }}>3.5/5</Text>
                <Image
                  source={require("../assets/medal.png")}
                  style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 40, minWidth: 40 }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: 35, justifyContent: "space-around", width: '100%', marginBottom: 40 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={{ flex: 1, width: '45%', paddingLeft: 25 }}>
              <Image
                source={require("../assets/yeezy.jpeg")}
                style={{ maxHeight: 160, maxWidth: 160, resizeMode: 'contain', height: 150, width: '100%' }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={{ width: "45%", paddingRight: 25, flexDirection: 'column' }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 24, textAlign: "center", color: 'white' }}>Yeezy 350</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("../assets/comment_orange.png")}
                  style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 80, minWidth: 80 }}
                />
                <Text style={{ position: "absolute", color: 'white', fontSize: 30, paddingBottom: 8 }}>1251</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center", flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 28, paddingBottom: 5, paddingRight: 8 }}>3.5/5</Text>
                <Image
                  source={require("../assets/medal.png")}
                  style={{ resizeMode: "contain", width: 'auto', height: 'auto', minHeight: 40, minWidth: 40 }}
                />
              </View>
            </TouchableOpacity>
          </View>


        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1C1E",
    alignItems: 'center',
    paddingTop: 12
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  signin: {
    justifyContent: "center",
    alignItems: 'center',
    paddingLeft: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 10
  },
  square: {
		width: 90,
		height: 40,
		borderRadius: 10,
		borderColor: '#2D9BF0',
		borderStyle: 'solid',
		borderWidth: 3,
		backgroundColor: "#313335",
		justifyContent: 'center',
		paddingBottom: 4,
	},
	text: {
		fontSize: 22,
		color: "#2D9BF0",
	}
});

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Whathot)