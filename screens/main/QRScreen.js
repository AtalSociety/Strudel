import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QRScreen = props => {
  return (
    <View style={styles.screens}>
      <Text>QR Screen</Text>
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

export default QRScreen;
