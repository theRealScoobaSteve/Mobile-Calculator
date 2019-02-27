import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { updateValue } from "./Actions";

class NumberButton extends Component {
  handlePress = () => {
    const { updateValue, children } = this.props;
    updateValue(parseInt(children));
  };

  render() {
    const { children } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.handlePress}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

export default connect(
  null,
  { updateValue }
)(NumberButton);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#c8c9cb",
    borderWidth: 0.5,
    borderColor: "black"
  },
  text: {
    textAlign: "center",
    fontSize: 38,
    color: "black"
  }
});
