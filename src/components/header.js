import React from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Button
} from "react-native";
import { whileStatement } from "@babel/types";

class Header extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.title}>TEST WAVUP</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "grey",
    marginTop: 100,
    fontSize: 30,
    fontWeight: "500",
    height: 50
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "500"
  }
});
export default Header;
