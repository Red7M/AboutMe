import React from 'react';
import { Text, View } from 'react-native';

export default function HelloWorldApp() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Reda Mehali <Text>, student ID: 301159604</Text></Text>
      <Text>I'm currently enrolled in MAPD712</Text>
    </View>
    )
}
