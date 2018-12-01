import React from "react";
import { Platform } from "react-native";
import { withNavigation } from "react-navigation";

import { Icon } from "expo";

class NavigationHeaderAvatar extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={Platform.OS === "ios" ? `ios-contact` : "md-contact"}
        size={40}
        style={{ marginLeft: 10 }}
        onPress={() => this.props.navigation.navigate("AccountSettings")}
      />
    );
  }
}

export default withNavigation(NavigationHeaderAvatar);
