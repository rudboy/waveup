/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Homepage from "./src/containers/homepage";

class App extends React.Component {
  render() {
    return <Homepage style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
