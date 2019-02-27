import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

class Output extends Component {
  componentWillUpdate() {
    // const { data } = this.props;
    // console.log(data);
    // let value = 0;
  }

  render() {
    const { data } = this.props;
    console.log("VALUE: ", data);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.data}</Text>
      </View>
    );
  }
}

function mapStateToProps({ data }) {
  console.log("OUTPUT: ", data);
  const numbers = data.toString();
  let value = 0;
  if (data.length > 0 && value.length < 6) {
    if (numbers.match(/[+]/g)) {
      const bothNumbers = numbers.split(/[+]/g);
      if (bothNumbers.length > 1) {
        const numberOne = bothNumbers[0].toString().replace(/[,]/g, "");
        const numberTwo = bothNumbers[1].toString().replace(/[,]/g, "");
        value = numberOne + numberTwo;
      }
    }
    // value = data.toString().replace(/[,]/g, "");
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
