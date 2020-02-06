import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
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

import Colors from "../constants/colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
};

const tabScreenConfig = {
  Product: {
    screen: ProductScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-restaurant" size={30} color="white" />;
      },
      tabBarColor: Colors.accent
    }
  },
  Account: {
    screen: AccountScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-person" size={30} color="white" />;
      },
      tabBarColor: Colors.accent
    }
  },
  QR: {
    screen: QRScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-barcode" size={30} color="white" />;
      },
      tabBarColor: Colors.accent
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-information" size={30} color="white" />;
      },
      tabBarColor: Colors.accent
    }
  }
};

// const MainTabNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {});
const MainTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(
        tabScreenConfig,
        {
          activeColor: "white",
          shifting: true
        },
        {
          defaultStackNavOptions: defaultStackNavOptions
        }
      )
    : createBottomTabNavigator(tabScreenConfig);

const StrudelNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen, navigationOptions: { header: null } },
    NewUser: NewUserScreen,
    ForgottenPassword: ForgottenPasswordScreen,
    Main: {
      screen: MainTabNavigator,
      navigationOptions: {
        headerLeft: null,
        headerStyle: {
          backgroundColor: Colors.accent
        }
      }
    }
  },
  {
    defaultStackNavOptions: defaultStackNavOptions
  }
);

export default createAppContainer(StrudelNavigator);
