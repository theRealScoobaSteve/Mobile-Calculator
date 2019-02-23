import React from "react";
import { StyleSheet, View } from "react-native";

export default (Row = ({ children }) => (
  <View style={styles.container}>{children}</View>
));
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  }
});
