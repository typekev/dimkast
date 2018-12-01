import { createStackNavigator } from "react-navigation";

import SignInScreen from "../screens/SignInScreen";

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

AuthStack.navigationOptions = {};

export default AuthStack;
