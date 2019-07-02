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

class List extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <FlatList
            style={{ backgroundColor: "grey" }}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 1,
                  marginLeft: 10,
                  marginRight: 10
                }}
              />
            )}
            data={this.props.list}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 30,
                  borderRadius: 3,
                  backgroundColor: "white",
                  margin: 7,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4
                }}
              >
                <View>
                  <Text style={{ color: "grey", fontSize: 15 }}>
                    User Id : {item.userId}
                  </Text>
                </View>
                <View
                  style={{
                    width: 250,
                    marginRight: 50
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{ color: "black", fontSize: 18 }}
                  >
                    Title : {item.title}
                  </Text>
                  <Text
                    style={{
                      marginTop: 5,
                      color: "grey",
                      fontSize: 15,
                      marginBottom: 5
                    }}
                  >
                    {item.completed ? "Completed : True" : "Completed : False"}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    fontWeight: "500"
  },
  title: {
    fontSize: 30,
    fontWeight: "500"
  }
});

export default List;
