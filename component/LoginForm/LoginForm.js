import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { styles } from "./styles";

export default class LoginForm extends Component {
  state = { email: "", password: "" };

  handleEmailChange = email => this.setState({ email });

  handlePasswordChange = password => this.setState({ password });

  handleButtonPress = () => {
    const { navigate } = this.props.navigation;
    // const { email, password } = this.state;
    // this.props.onButtonPress(email, password);
    navigate("Bot");
  };

  render() {
    const { email, password } = this.state;
    const { textInput, button, buttonTitle } = styles;
    return (
      <KeyboardAvoidingView>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
            }}
          />
        </View>
        <View>
          <TextInput
            style={textInput}
            placeholder="Email"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={this.handleEmailChange}
            value={email}
            underlineColorAndroid={"transparent"}
          />

          <TextInput
            style={textInput}
            placeholder="Password"
            secureTextEntry={true}
            returnKeyType="done"
            onChangeText={this.handlePasswordChange}
            value={password}
            underlineColorAndroid={"transparent"}
          />

          <TouchableOpacity style={button} onPress={this.handleButtonPress}>
            <Text style={buttonTitle}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
