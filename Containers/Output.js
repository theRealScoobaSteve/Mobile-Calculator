import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import math from "mathjs";

class Output extends Component {
  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{data}</Text>
      </View>
    );
  }
}

function mapStateToProps({ data }) {
  data = data.join("");
  if (data.length < 1) {
    data = "0";
  }
  if (data.match(/[\/\+\-\*\%]/g) && !data.match(/[=]/g)) {
    data = data.replace(/[0-9]{1,}(?=[\/\+\-\*\%])([\/\+\-\*])/g, "");
  }
  if (data.match(/[=]/g)) {
    data = math.eval(data.replace(/=/g, ""));
    data = math.format(data, { precision: 8 });
  }
  return { data };
}

export default connect(
  mapStateToProps,
  null
)(Output);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "black",
    padding: 10
  },
  text: {
    color: "white",
    fontSize: 60
  }
});
