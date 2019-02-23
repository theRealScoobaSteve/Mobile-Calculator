import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SignButton } from "./Components/SignButton";
import { NumberButton } from "./Components/NumberButton";
import { Zero } from "./Components/Zero"
import Output from "./Components/Output";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Output>10</Output>
        <View style={styles.row}>
          <SignButton>c</SignButton>
          <SignButton>+/-</SignButton>
          <SignButton>%</SignButton>
          <SignButton>÷</SignButton>
        </View>
        <View style={styles.row}>
          <NumberButton>7</NumberButton>
          <NumberButton>8</NumberButton>
          <NumberButton>9</NumberButton>
          <SignButton>x</SignButton>
        </View>
        <View style={styles.row}>
          <NumberButton>4</NumberButton>
          <NumberButton>5</NumberButton>
          <NumberButton>6</NumberButton>
          <SignButton>-</SignButton>
        </View>
        <View style={styles.row}>
          <NumberButton>1</NumberButton>
          <NumberButton>2</NumberButton>
          <NumberButton>3</NumberButton>
          <SignButton>+</SignButton>
        </View>
        <View style={styles.row}>
          <Zero>0</Zero>
          <NumberButton>.</NumberButton>
          <SignButton>=</SignButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff"
  },
  row: {
    flex: 1,
    flexDirection: "row"
  }
});
