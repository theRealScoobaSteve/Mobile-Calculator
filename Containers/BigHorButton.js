import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { updateValue } from "./Actions";

class BigHorButton extends Component {
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
)(BigHorButton);
const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 21,
    alignItems: "flex-start",
    justifyContent: "center",
    borderWidth: 0.5,
    backgroundColor: "#c8c9cb",
    borderColor: "black"
  },
  text: {
    textAlign: "center",
    fontSize: 38,
    color: "black"
  }
});
