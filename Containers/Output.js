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
  console.log("DATAPRE: ", data);
  if (data.match(/[\/\+\-\*\%]/g) && !data.match(/[=]/g)) {
    data = data.replace(/[0-9]{1,}(?=[\/\+\-\*\%])([\/\+\-\*])/g, "");
  }
  console.log("DATAMID: ", data);
  if (data.match(/[=]/g)) {
    console.log("DATAPOST: ", data);
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
