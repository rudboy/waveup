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
import axios from "axios";
import Header from "../components/header";
import List from "../components/list";

class Homepage extends React.Component {
  state = {
    tab: [],
    update: false
  };

  componentDidMount = async () => {
    try {
      // On charge les données ici
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      let tempTAb = [];
      for (let i = 0; i < 20; i++) {
        tempTAb.push(response.data[i]);
      }
      console.log(tempTAb);

      this.setState({
        tab: tempTAb,
        update: true
      });
    } catch (error) {}
  };

  render() {
    return (
      <View style={{ backgroundColor: "grey" }}>
        <Header />
        <List list={this.state.tab} />
      </View>
    );
  }
}
export default Homepage;
