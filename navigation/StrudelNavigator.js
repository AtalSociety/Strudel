import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import NewUserScreen from "../screens/login/NewUserScreen";
import ForgottenPasswordScreen from "../screens/login/ForgottenPasswordScreen";
import LoginScreen from "../screens/login/LoginScreen";
import AboutScreen from "../screens/main/AboutScreen";
import AccountScreen from "../screens/main/AccountScreen";
import ProductScreen from "../screens/main/ProductScreen";
import QRScreen from "../screens/main/QRScreen";

const MainTabNavigator = createBottomTabNavigator({
  Product: ProductScreen,
  Account: AccountScreen,
  QR: QRScreen,
  About: AboutScreen
});

const StrudelNavigator = createStackNavigator({
  Login: { screen: LoginScreen, navigationOptions: { header: null } },
  NewUser: NewUserScreen,
  ForgottenPassword: ForgottenPasswordScreen,
  Main: MainTabNavigator
});

export default createAppContainer(StrudelNavigator);
