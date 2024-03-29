import React from "react";
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
import Addcomment from "./screens/Addcomment.js";
import Item from "./screens/Item.js";
import Newcomment from "./screens/Newcomment.js";
import Newcommenterror from "./screens/Newcommenterror.js";
import Newcommentresult from "./screens/Newcommentresult.js";

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Avatar" component={Avatar} />
        <Stack.Screen name="Whathot" component={Whathot} />
        <Stack.Screen name="Likehistory" component={Likehistory} />
        <Stack.Screen name="Commenthistory" component={Commenthistory} />
        <Stack.Screen name="Addcomment" component={Addcomment} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="Newcomment" component={Newcomment} />
        <Stack.Screen name="Newcommenterror" component={Newcommenterror} />
        <Stack.Screen name="Newcommentresult" component={Newcommentresult} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
}

const Stack = createStackNavigator();
