import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

import Home from "./screens/Home.js";
import Login from "./screens/Login.js";
import Settings from "./screens/Settings.js";
import Signup from "./screens/Signup.js";
import Profile from "./screens/Profile.js";
import Avatar from "./screens/Avatar.js";
import Whathot from "./screens/Whathot.js";
import Likehistory from "./screens/Likehistory.js";
import Commenthistory from "./screens/Commenthistory.js";


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Settings" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Avatar" component={Avatar} />
        <Stack.Screen name="Whathot" component={Whathot} />
        <Stack.Screen name="Likehistory" component={Likehistory} />
        <Stack.Screen name="Commenthistory" component={Commenthistory} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
