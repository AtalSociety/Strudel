import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";

import Input from "../../components/Input";
import Colors from "../../constants/colors";
import ForgottenButton from "../../components/ForgettenButton";
import LoginButton from "../../components/MainButton";

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
          source={require("../../assets/logo_small.png")}
          resizeMethod="resize"
          resizeMode="center"
        />
        <View style={styles.inputContainer}>
          <Input title="Username" />
          <Input title="Password" password={true} />
        </View>
        <LoginButton
          title="LOGIN"
          style={{ marginTop: 30 }}
          onSelect={() => {
            props.navigation.navigate({ routeName: "Main" });
          }}
        />
        <View>
          <TouchableOpacity
            onPress={() => {
              console.log("Forgotten password");
              props.navigation.navigate({ routeName: "ForgottenPassword" });
            }}
          >
            <ForgottenButton
              title="Forgotten password?"
              onPress={() => this.onTextPress()}
              style={{ marginTop: 30 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("New User");
              props.navigation.navigate({ routeName: "NewUser" });
            }}
          >
            <ForgottenButton
              title="Create account"
              onPress={() => {
                console.Log("new user");
              }}
            />
          </TouchableOpacity>
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
