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
import OTPInput from './components/PasscodeTextInput';

export default class Otp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: '',
      checkOtp: true,
      autoFocus1: true,
      autoFocus2: false,
      autoFocus3: false,
      autoFocus4: false,
    };
  }
  handleOTPChange = otp => {
    this.setState({otp});
  };

  Resend = () => {
    this.setState({otp: undefined});
  };

  autoFill = () => {
    this.setState({otp: '2211'});
  };
  /* onTextChanged(t) {
    //callback for immediate state change
    if (t == 2) {
      this.setState({autoFocus1: false, autoFocus2: true}, () => {
        console.log(this.state);
      });
    }
    if (t == 3) {
      this.setState({autoFocus2: false, autoFocus3: true}, () => {
        console.log(this.state);
      });
    }
    if (t == 4) {
      this.setState({autoFocus3: false, autoFocus4: true}, () => {
        console.log(this.state);
      });
    }
  }*/
  Otp = () => {
    const {otp} = this.state; // validation in Regitration Page
    if (otp.length < 4) {
      this.setState({otp});
    } else {
      // registerCall();
      this.props.navigation.navigate('Login');
      Keyboard.dismiss();
    }
  };

  render() {
    const {otp, checkOtp} = this.state;

    return (
      <View style={styles.containerView}>
        <View style={styles.viewStyle}>
          <Toolbar />
          <Text style={styles.textStyle}>Enter 4-digit recovery code</Text>
          <Text style={styles.text}>
            The recovery code was sent to your email. Please enter the code:
          </Text>

          <OTPInput
            value={otp}
            onChange={this.handleOTPChange}
            tintColor="#51B6F5"
            offTintColor="#BBBCBE"
            otpLength={4}
          />
        </View>
        <Button
          buttonStyle={styles.DoneButton}
          onPress={this.Otp}
          title="Done"
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{textAlign: 'center'}}
            onPress={() => this.props.navigation.navigate('ForgotPassword')}>
            Don't receive Otp? {''}
          </Text>
          <Text
            style={{textAlign: 'center', color: '#51B6F5'}}
            onPress={this.Resend}>
            {''}Resend
          </Text>
        </View>
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
    fontSize: 16,
    marginTop: 10,
  },
  DoneButton: {
    backgroundColor: '#51B6F5',
    borderRadius: 5,
    height: 50,
    margin: 15,
    marginTop: 10,
  },
  centerEverything: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#E7DDD3',
  },
  passcodeContainer: {
    flexDirection: 'row',
  },
});
