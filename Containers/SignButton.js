import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { updateExpression } from "./Actions";

class SignButton extends Component {
  handlePress = () => {
    const { updateExpression, children } = this.props;
    updateExpression(children);
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
  { updateExpression }
)(SignButton);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fd7d00",
    borderWidth: 0.5,
    borderColor: "black"
  },
  text: {
    textAlign: "center",
    fontSize: 38,
    color: "white"
  }
});
