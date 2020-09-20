import React, { Component } from "react";
import Navigation from "./core/config/Navigation";
import { Provider } from "react-redux";
import store from "./core/redux/config/Store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
