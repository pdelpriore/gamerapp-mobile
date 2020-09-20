import React, { Component } from "react";
import { View, Image } from "react-native";

export default class SplashScreen extends Component {
  componentDidMount() {
    this.setTimeOut = setTimeout(() => {
      this.props.navigation.navigate("App");
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.setTimeOut);
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3E3E3E"
          }}
        >
          <Image
            source={require("../../assets/logo.jpg")}
            style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
          ></Image>
        </View>
        <View style={{ flex: 1, backgroundColor: "#3E3E3E" }}></View>
      </View>
    );
  }
}
