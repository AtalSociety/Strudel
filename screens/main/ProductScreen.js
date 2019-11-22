import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductScreen = props => {
  return (
    <View style={styles.screens}>
      <Text>Product Screen</Text>
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

export default ProductScreen;
