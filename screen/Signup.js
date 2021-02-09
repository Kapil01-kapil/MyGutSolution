import React, {Component} from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import Toast from 'react-native-simple-toast';
import {Avatar, Button} from 'react-native-elements';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Label,
} from 'native-base';

export default class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      mobile: '',

      confirmpassword: '',
      password: '',
      hidePassword: true,
      error: ' ',
      icons: true,
      focus: false,
      icEye: 'md-eye-off',
      checkEmail: true,
      checkPassword: true,
    };
  }
  changePwdType = () => {
    let newState;
    if (this.state.hidePassword) {
      newState = {
        icEye: 'md-eye',
        hidePassword: false,
      };
    } else {
      newState = {
        icEye: 'md-eye-off',
        hidePassword: true,
      };
    }

    // set new state value
    this.setState(newState);
  };

  login = () => {
    const {email, password} = this.state; // validation in Regitration Page

    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(email) == '') {
      this.setState({checkEmail: false});

      this.setState({icons: true});
    } else if (password.length < 8) {
      this.setState({checkPassword: false});
    } else {
      // registerCall();
      // this.props.navigation.navigate('Bottomtab');
      Keyboard.dismiss();
    }
  };

  logInUser() {
    this.props.screenProps.isLoggedIn();
  }

  onChangeText = key => text => {
    if (key == 'email' && key == ' ') {
      this.setState({checkEmail: false});
    } else if (key == 'email') {
      if (text != '') {
        if (text.length > 0) {
          this.setState({icons: false});
          this.setState({checkEmail: true});
        } else {
          this.setState({icons: true});
          this.setState({checkEmail: false});
        }
      } else {
        this.setState({icons: true});
        this.setState({checkEmail: false});
      }
    } else if (key == 'password' && key == ' ') {
      this.setState({checkPassword: false});
    } else if (key == 'password') {
      if (text != '') {
        if (text.length > 0) {
          this.setState({iconss: false});
          this.setState({checkPassword: true});
        } else {
          this.setState({iconss: true});
          this.setState({checkPassword: false});
        }
      } else {
        this.setState({iconss: true});
        this.setState({checkPassword: false});
      }
    }
    this.setState({[key]: text});
  };

  render() {
    const {
      email,
      password,
      checkEmail,
      checkPassword,
      iconSize,
      iconColor,
      label,
      style,
      icons,
      iconss,
    } = this.state;

    return (
      <KeyboardAvoidingView style={styles.containerView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.loginScreenContainer}>
              <View style={styles.loginFormView}>
                <View style={styles.logo}>
                  <Image
                    style={{width: '80%', height: 200}}
                    source={require('./assets/Logo.jpg')}
                  />
                </View>
                <View style={{margin: 20}}>
                  <Item floatingLabel>
                    <Label>Name</Label>
                    <Input
                      style={styles.loginEmailTextInput}
                      value={email}
                      onChangeText={this.onChangeText('email')}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholderTextColor="#002f6c"
                      selectionColor="#fff"
                      keyboardType="email-address"
                      onSubmitEditing={() => this.password.focus()}
                    />
                    {!icons && (
                      <Icon
                        name="checkmark-circle"
                        style={{color: '#FF7A7B'}}
                      />
                    )}
                  </Item>
                  {!checkEmail && (
                    <Text style={{color: 'red'}}>
                      Please enter a valid email
                    </Text>
                  )}
                  <Item floatingLabel>
                    <Label>Mobile</Label>
                    <Input
                      style={styles.loginEmailTextInput}
                      value={email}
                      onChangeText={this.onChangeText('email')}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholderTextColor="#002f6c"
                      selectionColor="#fff"
                      keyboardType="email-address"
                      onSubmitEditing={() => this.password.focus()}
                    />
                    {!icons && (
                      <Icon
                        name="checkmark-circle"
                        style={{color: '#FF7A7B'}}
                      />
                    )}
                  </Item>
                  {!checkEmail && (
                    <Text style={{color: 'red'}}>
                      Please enter a valid email
                    </Text>
                  )}
                  <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                      style={styles.loginEmailTextInput}
                      value={email}
                      onChangeText={this.onChangeText('email')}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholderTextColor="#002f6c"
                      selectionColor="#fff"
                      keyboardType="email-address"
                      onSubmitEditing={() => this.password.focus()}
                    />
                    {!icons && (
                      <Icon
                        name="checkmark-circle"
                        style={{color: '#FF7A7B'}}
                      />
                    )}
                  </Item>
                  {!checkEmail && (
                    <Text style={{color: 'red'}}>
                      Please enter a valid email
                    </Text>
                  )}

                  <View style={{marginTop: 10}}>
                    <Item floatingLabel>
                      <Label>Password</Label>
                      <Input
                        style={styles.loginPasswordTextInput}
                        value={password}
                        onChangeText={this.onChangeText('password')}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder="Password"
                        secureTextEntry={this.state.hidePassword}
                        placeholderTextColor="#002f6c"
                        ref={input => (this.password = input)}
                      />
                      <Icon
                        style={styles.icon}
                        name={this.state.icEye}
                        color={this.props.iconColor}
                        onPress={this.changePwdType}
                      />
                    </Item>
                  </View>
                  {!checkPassword && (
                    <Text style={{color: 'red'}}>
                      Please enter a valid password
                    </Text>
                  )}
                  <View style={{marginTop: 10}}>
                    <Item floatingLabel>
                      <Label>Confirm Password</Label>
                      <Input
                        style={styles.loginPasswordTextInput}
                        value={password}
                        onChangeText={this.onChangeText('password')}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder="Password"
                        secureTextEntry={this.state.hidePassword}
                        placeholderTextColor="#002f6c"
                        ref={input => (this.password = input)}
                      />
                      <Icon
                        style={styles.icon}
                        name={this.state.icEye}
                        color={this.props.iconColor}
                        onPress={this.changePwdType}
                      />
                    </Item>
                  </View>
                  {!checkPassword && (
                    <Text style={{color: 'red'}}>
                      Please enter a valid password
                    </Text>
                  )}
                </View>
                <Button
                  buttonStyle={styles.loginButton}
                  onPress={this.login}
                  title="Login"
                />
                <Text
                  style={{textAlign: 'center', color: '#51B6F5'}}
                  onPress={() =>
                    this.props.navigation.navigate('ForgotPassword')
                  }>
                  Forgot password?
                </Text>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    color: '#3132a1',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 50,
    marginBottom: 30,
    textAlign: 'center',
  },

  logo: {
    alignItems: 'center',
    marginTop: 5,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
  },
  loginEmailTextInput: {
    height: 43,
    fontSize: 14,
    marginBottom: 5,
  },
  loginPasswordTextInput: {
    height: 43,
    fontSize: 14,

    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '#51B6F5',
    borderRadius: 5,
    height: 45,
    margin: 20,
  },
});
