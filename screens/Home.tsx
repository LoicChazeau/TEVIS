import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

import History from '../components/home/History';
import Logo from '../components/home/Logo';
import Newcomment from '../components/home/Newcomment';
import Searchbar from '../components/home/Searchbar';
import Settings from '../components/home/Settings';
import Signin from '../components/home/Signin';
import Whathot from '../components/home/Whathot';

export default function Home() {
  return (
    <View>
      <History/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});