import React from 'react'
import { View, StyleSheet } from 'react-native'
import RNPickerSelect from "react-native-picker-select";

export default function PickerSelect() {
  return (
    <View style={styles.center}>
      <RNPickerSelect
        placeholder={{
          label: 'Most recent',
          value: 'Most recent',
        }}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "Least recent", value: "Least recent" },
          { label: "Most rated", value: "Most rated" },
          { label: "Least rated", value: "Least rated" },]} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40 
  }
});