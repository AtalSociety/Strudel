import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const LoginButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.accent,
    marginVertical: 25,
    paddingVertical: 2,
    paddingHorizontal: 50,
    borderRadius: 25
  },
  text: {
    fontSize: 25,
    textTransform: "uppercase",
    color: "white"
  }
});

export default LoginButton;
