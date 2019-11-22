import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentTemplate = props => {
  return (
    <View style={styles.screens}>
      <Text>Forgotton password screen</Text>
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

export default ComponentTemplate;
