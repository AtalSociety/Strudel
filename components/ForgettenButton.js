import React from "react";
import { Text, StyleSheet } from "react-native";

const ForgottenButton = props => {
  return <Text>{props.title}</Text>;
};

const styles = StyleSheet.create({
  button: {
    color: "rgba(1,0,0,1)",
    backgroundColor: "rgba(0,0,0,1)"
  }
});

export default ForgottenButton;
