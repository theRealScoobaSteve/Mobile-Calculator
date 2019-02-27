import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import SignButton from "./Containers/SignButton";
import NumberButton from "./Containers/NumberButton";
import Zero from "./Containers/Zero";
import Row from "./Components/Row";
import Output from "./Containers/Output";

import Reducers from "./Containers/Reducers";

const appReducer = combineReducers({ data: Reducers });

const store = createStore(appReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Output />
          <Row>
            <SignButton>c</SignButton>
            <SignButton>+/-</SignButton>
            <SignButton>%</SignButton>
            <SignButton>÷</SignButton>
          </Row>
          <Row>
            <NumberButton>7</NumberButton>
            <NumberButton>8</NumberButton>
            <NumberButton>9</NumberButton>
            <SignButton>x</SignButton>
          </Row>
          <Row>
            <NumberButton>4</NumberButton>
            <NumberButton>5</NumberButton>
            <NumberButton>6</NumberButton>
            <SignButton>-</SignButton>
          </Row>
          <Row>
            <NumberButton>1</NumberButton>
            <NumberButton>2</NumberButton>
            <NumberButton>3</NumberButton>
            <SignButton>+</SignButton>
          </Row>
          <Row>
            <Zero>0</Zero>
            <NumberButton>.</NumberButton>
            <SignButton>=</SignButton>
          </Row>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff"
  }
});
