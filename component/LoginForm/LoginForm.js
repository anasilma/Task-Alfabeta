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
  state = { username: "", password: "" };

  handleUserChange = username => this.setState({ username });

  handlePasswordChange = password => this.setState({ password });

  handleButtonPress = () => {
    if(this.state.username === 'user' && this.state.password === '12345'){
      const { navigate } = this.props.navigation;
      return(
        navigate("Bot")
      )
    } else{
      alert('username = user, pass= 12345')
    }
  };

  render() {
    const { password } = this.state;
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
            placeholder="Email / Username"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={this.handleUserChange}
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
