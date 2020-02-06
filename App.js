import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
