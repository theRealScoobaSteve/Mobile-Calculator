import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default (Zero = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
  </View>
));
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
