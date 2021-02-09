import React, {Component} from 'react';
import {
  Keyboard,
  TextInput,
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Picker,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Text,
  Label,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'Brain@mygutsolution.com',
      name: 'Brain',
      Data_of_Birth: '24 july 1994',
      Phone_number: '9999009999',
      hidePassword: true,
      error: ' ',
      IBS_Type: 'Undefined',
      GP_Name: 'Undefined',
      Hospital: 'St james Hospital',
      Consultant: 'Barry Hall',
      icons: true,
      focus: false,
      icEye: 'md-eye-off',
      checkEmail: true,
      checkPassword: true,
    };
  }

  render() {
    const {
      email,
      name,
      GP_Name,
      Hospital,
      Consultant,
      Data_of_Birth,
      checkEmail,
      IBS_Type,
      checkPassword,
      Phone_number,
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
            <View style={styles.containerView}>
              <View style={{backgroundColor: '#51B6F5'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    margin: 15,
                  }}>
                  <Icon
                    name="arrowleft"
                    style={{fontSize: 24, color: '#FFF'}}
                    onPress={() => this.props.navigation.goBack(null)}
                  />
                  <View
                    style={{
                      alignItems: 'center',
                      flex: 1,
                    }}>
                    <Text style={styles.textStyle}>Profile</Text>
                  </View>
                </View>
              </View>
              <View style={{margin: 15}}>
                <Item floatingLabel>
                  <Label>Name</Label>
                  <Input
                    style={styles.loginEmailTextInput}
                    value={name}
                    disabled={true}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#002f6c"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                  />
                </Item>
                <View style={styles.view}>
                  <Item floatingLabel>
                    <Label>email</Label>
                    <Input
                      style={styles.loginEmailTextInput}
                      value={email}
                      disabled={true}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholderTextColor="#002f6c"
                      selectionColor="#fff"
                      keyboardType="email-address"
                      onSubmitEditing={() => this.password.focus()}
                    />
                  </Item>
                </View>
                <View style={styles.view}>
                  <Item floatingLabel>
                    <Label>Data of Birth</Label>
                    <Input
                      style={styles.loginEmailTextInput}
                      value={Data_of_Birth}
                      disabled={true}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholderTextColor="#002f6c"
                      selectionColor="#fff"
                      keyboardType="email-address"
                      onSubmitEditing={() => this.password.focus()}
                    />
                  </Item>
                </View>
                <View style={styles.view}>
                  <Item floatingLabel>
                    <Label>Phone Number</Label>
                    <Input
                      style={styles.loginEmailTextInput}
                      value={Phone_number}
                      disabled={true}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholderTextColor="#002f6c"
                      selectionColor="#fff"
                      keyboardType="email-address"
                      onSubmitEditing={() => this.password.focus()}
                    />
                  </Item>
                </View>
                <View style={styles.view}>
                  <Item floatingLabel>
                    <Label>IBS Type</Label>
                    <Input
                      style={styles.loginEmailTextInput}
                      value={IBS_Type}
                      disabled={true}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholderTextColor="#002f6c"
                      selectionColor="#fff"
                      keyboardType="email-address"
                      onSubmitEditing={() => this.password.focus()}
                    />
                  </Item>
                </View>
                <View style={styles.view}>
                  <Item floatingLabel>
                    <Label>GP Name</Label>
                    <Input
                      style={styles.loginEmailTextInput}
                      value={GP_Name}
                      disabled={true}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholderTextColor="#002f6c"
                      selectionColor="#fff"
                      keyboardType="email-address"
                      onSubmitEditing={() => this.password.focus()}
                    />
                  </Item>
                </View>
                <View style={styles.view}>
                  <Item floatingLabel>
                    <Label>Hospital</Label>
                    <Input
                      style={styles.loginEmailTextInput}
                      value={Hospital}
                      disabled={true}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholderTextColor="#002f6c"
                      selectionColor="#fff"
                      keyboardType="email-address"
                      onSubmitEditing={() => this.password.focus()}
                    />
                  </Item>
                </View>
                <View style={styles.view}>
                  <Item floatingLabel>
                    <Label>Consultant</Label>
                    <Input
                      style={styles.loginEmailTextInput}
                      value={Consultant}
                      disabled={true}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholderTextColor="#002f6c"
                      selectionColor="#fff"
                      keyboardType="email-address"
                      onSubmitEditing={() => this.password.focus()}
                    />
                  </Item>
                </View>
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
  viewStyle: {
    flexDirection: 'row',
    margin: 15,

    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 18,

    fontWeight: 'bold',
    color: 'white',
  },
  view: {
    marginTop: 15,
  },
  text: {
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#51B6F5',
    borderRadius: 5,
    height: 50,
    margin: 15,
    marginTop: 15,
  },
});
