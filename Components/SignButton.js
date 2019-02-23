import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const SignButton = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{children}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fd7d00",
    borderWidth: 0.5,
    borderColor: 'black',
  },
  text: {
    textAlign: "center",
    fontSize: 38,
    color: "white"
  }
});
