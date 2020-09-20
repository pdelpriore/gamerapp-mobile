import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Authentication from "../../ui/Authentication";
import SplashScreen from "../../ui/unauthenticated/SplashScreen";
import LoginScreen from "../../ui/unauthenticated/LoginScreen";
import Home from "../../ui/authenticated/Home";

const AppNavigator = createSwitchNavigator({
  Auth: Authentication,
  Home: Home,
  Login: LoginScreen
});

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: AppNavigator
});

const Navigation = createAppContainer(InitialNavigator);

export default Navigation;
