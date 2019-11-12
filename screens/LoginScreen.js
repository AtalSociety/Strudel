import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Input from "../components/Input";
import Colors from "../constants/colors";
import ForgottenButton from "../components/ForgettenButton";
import LoginButton from "../components/LoginButton";

const LoginScreen = props => {
  const onTextPress = () => {
    console.log("Text has been pressed!");
  };
  return (
    <View style={styles.screen}>
      <Image
        style={styles.image}
        source={require("../assets/logo_small.png")}
        resizeMethod="resize"
        resizeMode="center"
      />
      <View style={styles.inputContainer}>
        <Input title="Username" />
        <Input title="Password" />
      </View>
      <LoginButton title="Login" />
      <View>
        <ForgottenButton
          title="forgotten username/password?"
          onPress={() => this.onTextPress()}
        />
        <ForgottenButton
          title="new user?"
          onPress={() => {
            console.Log("new user");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey"
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  image: {
    width: "150%",
    height: 200
  }
});

export default LoginScreen;
