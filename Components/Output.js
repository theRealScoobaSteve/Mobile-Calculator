import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default Output = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
  </View>
)

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
