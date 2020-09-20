import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ProfileScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Welcome to profile screen</Text>
      </View>
    );
  }
}
