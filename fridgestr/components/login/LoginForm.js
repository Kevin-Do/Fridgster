import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Button, Input, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleFormInput = (fieldName, text) => {
    this.setState({
      [fieldName]: text
    });
  };

  handleLogin = () => {
    const { email, password } = this.state;
  };

  render() {
    const { email, password } = this.state;
    return (
      <View>
        <Card title="Login">
          <Input
            placeholder="Email"
            leftIcon={<Icon name="envelope-o" />}
            shake
            onChangeText={text => this.handleFormInput("email", text)}
            autoCorrect={false}
          />
          <Input
            placeholder="Password"
            leftIcon={<Icon name="lock" />}
            shake
            onChangeText={text => this.handleFormInput("password", text)}
            secureTextEntry
            autoCorrect={false}
          />
          <Text>state email:{email}</Text>
          <Text>state password:{password}</Text>
          <Button title="Login" onButtonPress={this.handleLogin} />
        </Card>
      </View>
    );
  }
}

export default LoginForm;
