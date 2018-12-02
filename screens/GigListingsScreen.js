import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import getGigs from "../api/firebase/gigs/getGigs";
import NavigationHeaderAvatar from "../components/NavigationHeaderAvatar";

export default class GigListingsScreen extends React.Component {
  static navigationOptions = {
    title: "Gigs",
    headerLeft: <NavigationHeaderAvatar />
  };

  state = { gigsList: [{}] };

  componentDidMount() {
    getGigs(gigsList => this.setState({ gigsList }));
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>{this.state.gigsList[0].id}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
