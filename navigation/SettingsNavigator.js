import { createStackNavigator } from "react-navigation";

import AccountSettingsScreen from "../screens/AccountSettingsScreen";

const SettingsStack = createStackNavigator({
  AccountSettings: AccountSettingsScreen
});

SettingsStack.navigationOptions = {};

export default SettingsStack;
