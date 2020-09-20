import React, { Component } from "react";
import { connect } from "react-redux";
import checkToken from "../core/redux/authentication/thunk/AuthenticationThunk";

class Authentication extends Component {
  componentDidMount() {
    this.props.isAuthenticated;
    if (this.props.authentication) {
      this.props.navigation.navigate("Home");
    } else {
      this.props.navigation.navigate("Login");
    }
  }
  render() {
    return <></>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isAuthenticated: () => dispatch(checkToken())
  };
};

const mapStateToProps = state => {
  return {
    authentication: state.authentication
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
