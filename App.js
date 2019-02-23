import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import SignButton from "./Components/SignButton";
import NumberButton from "./Components/NumberButton";
import Zero from "./Components/Zero";
import Row from "./Components/Row";
import Output from "./Components/Output";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Output>0</Output>
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
