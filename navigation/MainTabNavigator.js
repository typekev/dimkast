import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import GigListingsScreen from "../screens/GigListingsScreen";
import EventsScreen from "../screens/EventsScreen";
import AccountSettingsScreen from "../screens/AccountSettingsScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  AccountSettings: AccountSettingsScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-home` : "md-home"}
    />
  )
};

const GigListingsStack = createStackNavigator({
  Gigs: GigListingsScreen,
  AccountSettings: AccountSettingsScreen
});

GigListingsStack.navigationOptions = {
  tabBarLabel: "Gigs",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cash" : "md-cash"}
    />
  )
};

const EventsStack = createStackNavigator({
  Events: EventsScreen,
  AccountSettings: AccountSettingsScreen
});

EventsStack.navigationOptions = {
  tabBarLabel: "Events",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-beer" : "md-beer"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  GigListingsStack,
  EventsStack
});
