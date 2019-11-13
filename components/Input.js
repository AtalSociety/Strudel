import React from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";

const Input = props => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.font}>{props.title}</Text>
      <TextInput style={styles.input} />
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
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 5,
    color: "white",
    fontSize: 18
  },
  font: {
    fontSize: 20,
    color: "white"
  }
});

export default Input;
