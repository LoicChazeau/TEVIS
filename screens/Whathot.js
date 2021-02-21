import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { connect } from 'react-redux'

import Logo from "../components/Logo.js";
import ContainerInfo from "../components/ContainerInfo.js";

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
                <Text style={styles.title}>What's HOT</Text>
              </View>
              <View>{login}</View>
            </View>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnImage}>
              <Image
                source={require("../assets/yeezy.jpeg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnContainerInfo}>
              <ContainerInfo />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnImage}>
              <Image
                source={require("../assets/yeezy.jpeg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnContainerInfo}>
              <ContainerInfo />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnImage}>
              <Image
                source={require("../assets/yeezy.jpeg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnContainerInfo}>
              <ContainerInfo />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnImage}>
              <Image
                source={require("../assets/yeezy.jpeg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnContainerInfo}>
              <ContainerInfo />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnImage}>
              <Image
                source={require("../assets/yeezy.jpeg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnContainerInfo}>
              <ContainerInfo />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnImage}>
              <Image
                source={require("../assets/yeezy.jpeg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnContainerInfo}>
              <ContainerInfo />
            </TouchableOpacity>
          </View>

          <View style={[styles.row, { marginBottom: 50 }]}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnImage}>
              <Image
                source={require("../assets/yeezy.jpeg")}
                style={styles.image}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Item')} style={styles.BtnContainerInfo}>
              <ContainerInfo />
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
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
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
  },
  row: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-around",
    width: '100%'
  },
  BtnImage: {
    flex: 1,
    width: '45%',
    paddingLeft: 25
  },
  image: {
    maxHeight: 160,
    maxWidth: 160,
    resizeMode: 'contain',
    height: 150,
    width: '100%'
  },
  BtnContainerInfo: {
    width: "45%",
    paddingRight: 25,
    flexDirection: 'column'
  }
});

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Whathot)