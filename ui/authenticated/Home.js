import React from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import ProfileScreen from "./ProfileScreen";

const Home = createMaterialBottomTabNavigator({
  Profile: { screen: ProfileScreen }
});

export default Home;
