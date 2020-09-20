import React, { Component } from "react";
import { View, Button, Image, Text, ProgressBarAndroid } from "react-native";
import LoginForm from "../component/LoginForm";
import styles from "../../styles/StyleSheet";
import { loginUser } from "../../core/redux/login/thunk/LoginThunk";
import { connect } from "react-redux";

class LoginScreen extends Component {
  state = {
    email: "",
    password: ""
  };

  handleLoginOnChange = (typedText, inputName) => {
    if (inputName === "email") {
      this.setState({
        email: typedText.toLowerCase()
      });
    } else if (inputName === "password") {
      this.setState({
        password: typedText
      });
    }
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={styles.loginContainer}>
          <Image
            source={require("../../assets/logo.jpg")}
            style={{ width: 150, height: 150, borderRadius: 150 / 2 }}
          ></Image>
        </View>
        <View style={styles.loginContainer2}>
          <LoginForm onchange={this.handleLoginOnChange} />
          <View style={{ height: 30 }} />
          {this.props.loading ? (
            <ProgressBarAndroid />
          ) : this.props.userNotFound ? (
            <Text>{this.props.userNotFound}</Text>
          ) : this.props.emailNotConfirmed ? (
            <Text>{this.props.emailNotConfirmed}</Text>
          ) : this.props.passwordNotCorrect ? (
            <Text>{this.props.passwordNotCorrect}</Text>
          ) : this.props.googleAccount ? (
            <Text>{this.props.googleAccount}</Text>
          ) : null}
          <View style={{ height: 50 }} />
          <View style={styles.loginButton}>
            <Button
              onPress={() =>
                this.props.login(this.state.email, this.state.password)
              }
              title="Se connecter"
            />
          </View>
          <View style={{ height: 10 }} />
          <Text style={{ color: "#FFC107" }}>Mot de passe oublié ?</Text>
          <View style={{ height: 20 }} />
          <View style={styles.loginButton}>
            <Button
              onPress={() => this.props.navigation.navigate("Home")}
              title="Se connecter avec Google"
            />
          </View>
          <View style={{ height: 10 }} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#FFC107" }}>Pas de compte ? </Text>
            <Text
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#81BEFF",
                color: "#FFC107"
              }}
            >
              Enregistrez-vous
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(loginUser(email, password))
  };
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    userNotFound: state.userNotFound,
    emailNotConfirmed: state.emailNotConfirmed,
    passwordNotCorrect: state.passwordNotCorrect,
    googleAccount: state.googleAccount
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
