import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import NavigationHeaderAvatar from "../components/NavigationHeaderAvatar";

export default class EventsScreen extends React.Component {
  static navigationOptions = {
    title: "Events",
    headerLeft: <NavigationHeaderAvatar />
  };

  render() {
    return <ScrollView style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
