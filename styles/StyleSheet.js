import React from "react";
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  loginTextInput: {
    padding: 5,
    width: Dimensions.get("window").width / 1.5,
    color: "white"
  },
  loginInputLabel: {
    color: "white"
  },
  loginContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3E3E3E"
  },
  loginContainer2: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3E3E3E"
  },
  loginFormContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white"
  },
  loginButton: {
    width: Dimensions.get("window").width / 2,
    borderRadius: 30,
    backgroundColor: "#007BFF"
  }
});
