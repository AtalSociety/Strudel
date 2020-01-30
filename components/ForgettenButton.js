import React from "react";
import { Text, StyleSheet } from "react-native";

const ForgottenButton = props => {
  return <Text style = {styles.button}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  button: {
    color: 'white',
    padding: '2.5%',
    fontSize: 17,
    textAlign: 'center'
  }
});

export default ForgottenButton;
