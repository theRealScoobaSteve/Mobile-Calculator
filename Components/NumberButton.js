import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default (NumberButton = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
  </View>
));

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
