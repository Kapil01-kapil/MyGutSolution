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
import Toolbar from './components/Toolbar';
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      icons: true,
      checkEmail: true,
    };
  }
  ForgotPassword = () => {
    const {email} = this.state; // validation in Regitration Page

    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(email) == '') {
      this.setState({checkEmail: false});
      this.setState({icons: true});
    } else {
      // registerCall();
      this.props.navigation.navigate('OtpScreen');
      Keyboard.dismiss();
    }
  };
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
    }
    this.setState({[key]: text});
  };
  render() {
    const {email, checkEmail, icons} = this.state;
    return (
      <View style={styles.containerView}>
        <View style={styles.viewStyle}>
          <Toolbar />
          <Text style={styles.textStyle}>Forgot Password</Text>
          <Text style={styles.text}>
            Enter your registered email to receive 4-digit OTP.
          </Text>
          <View style={{marginTop: 20}}>
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
                <Icon name="checkmark-circle" style={{color: '#FF7A7B'}} />
              )}
            </Item>
            {!checkEmail && (
              <Text style={{color: 'red'}}>Please enter a valid email</Text>
            )}
          </View>
        </View>
        <Button
          buttonStyle={styles.sendButton}
          onPress={this.ForgotPassword}
          title="Send"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewStyle: {
    margin: 15,
  },
  textStyle: {
    fontSize: 30,
    marginTop: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    marginTop: 10,
  },
  sendButton: {
    backgroundColor: '#51B6F5',
    borderRadius: 5,
    height: 50,
    margin: 15,
    marginTop: 15,
  },
});
