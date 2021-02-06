import * as React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import { SearchBar } from 'react-native-elements';


export default function Searchbar() {
  const [value, setValue] = React.useState("");
  return (
    <View>
      <SearchBar
        style={{ fontSize: 12, width: 115, height: 10, marginLeft: 0, paddingLeft: 10 }}
        containerStyle={{ backgroundColor: "#1A1C1E", borderBottomWidth: 0, borderTopWidth: 0 }}
        inputContainerStyle={{ backgroundColor: "white", borderColor: '#D1D1D1', borderWidth: 3, borderBottomWidth: 3 }}
        leftIconContainerStyle={{ width: 15, height: 15 }}
        onChangeText={newVal => setValue(newVal)}
        placeholder="What to comment ?"
        placeholderTextColor="#888"
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});