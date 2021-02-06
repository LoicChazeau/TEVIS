import React from 'react'
import {View, Text, StyleSheet, Image } from 'react-native'
import { SearchBar } from 'react-native-elements';


export default function Searchbar() {
    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});