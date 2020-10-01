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
      <Text>Reda Mehali <Text>, software engineer</Text></Text>
      <Text>I'm taking MAPD712 through Centennial College</Text>
    </View>
    )
}
