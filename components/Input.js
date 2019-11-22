import React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";

const Input = props => {
  let password = props.password;
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.font}>{props.title}</Text>
      <TextInput style={styles.input} secureTextEntry={password} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    alignContent: "center"
  },
  input: {
    height: 30,
    width: "100%",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginTop: 10,
    marginBottom: 5,
    color: "white",
    fontSize: 25
  },
  font: {
    fontSize: 18,
    color: "white"
  }
});

export default Input;
