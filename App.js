import React from "react";
import { StyleSheet, Text } from "react-native";

import StrudelNavigator from "./navigation/StrudelNavigator";

export default function App() {
  return <StrudelNavigator />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
