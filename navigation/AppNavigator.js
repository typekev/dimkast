import React from "react";
import { createSwitchNavigator } from "react-navigation";

import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import MainTabNavigator from "./MainTabNavigator";
import SettingsStack from "./SettingsNavigator";
import AuthStack from "./AuthStack";

export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Main: MainTabNavigator,
    Settings: SettingsStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);
