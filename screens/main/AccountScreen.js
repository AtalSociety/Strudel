import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AccountScreen = props => {
  return (
    <View style={styles.screens}>
      <Text>Account Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screens: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AccountScreen;
