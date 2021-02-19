import * as React from "react";
import { StyleSheet, TextInput } from 'react-native'

export default function Searchbar() {
  const [value, onChangeText] = React.useState('');
  return (
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder='What to comment ?'
      />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'gray',
    fontSize: 15,
    padding: 12,
    width: '43%',
    textAlign: 'center'
  }
});