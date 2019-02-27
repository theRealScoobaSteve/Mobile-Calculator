import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { updateExpression } from "./Actions";

class BigHorSignButton extends Component {
  handlePress = () => {
    const { updateExpression, children } = this.props;
    updateExpression(parseInt(children));
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
)(BigHorSignButton);
const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 21,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    backgroundColor: "#fd7d00",
    borderColor: "black"
  },
  text: {
    textAlign: "center",
    fontSize: 38,
    color: "white"
  }
});
