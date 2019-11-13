import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from "react-native";

import Input from "../components/Input";
import Colors from "../constants/colors";
import ForgottenButton from "../components/ForgettenButton";
import LoginButton from "../components/MainButton";

const LoginScreen = props => {
  const onTextPress = () => {
    console.log("Text has been pressed!");
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView style={styles.screen} behavior="padding">
        <Image
          style={styles.image}
          source={require("../assets/logo_small.png")}
          resizeMethod="resize"
          resizeMode="center"
        />
        <View style={styles.inputContainer}>
          <Input title="Username" />
          <Input title="Password" password={true} />
        </View>
        <LoginButton title="Login" />
        <View>
          <ForgottenButton
            title="Forgotten password?"
            onPress={() => this.onTextPress()}
            style={{ marginTop: 30 }}
          />
          <ForgottenButton
            title="Create account"
            onPress={() => {
              console.Log("new user");
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
