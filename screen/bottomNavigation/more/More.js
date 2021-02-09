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
  Picker,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export default class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.containerView}>
              <View style={{backgroundColor: '#51B6F5'}}>
                <View style={{flexDirection: 'row', margin: 15}}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                    }}>
                    <Text style={styles.textStyle}>More</Text>
                  </View>
                </View>
              </View>
              <View style={{margin: 10}}>
                <TouchableOpacity
                  style={styles.viewStyle}
                  onPress={() => this.props.navigation.navigate('Profile')}>
                  <Text style={styles.text}>Profile</Text>
                  <Icon name="right" style={{fontSize: 20}} />
                </TouchableOpacity>
                <View style={styles.viewStyle}>
                  <Text style={styles.text}>Change Password</Text>
                  <Icon name="right" style={{fontSize: 20}} />
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.text}>Notification</Text>
                  <Icon name="right" style={{fontSize: 20}} />
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.text}>Delete Account</Text>
                  <Icon name="right" style={{fontSize: 20}} />
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.text}>Terms of Services</Text>
                  <Icon name="right" style={{fontSize: 20}} />
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.text}>Privacy Policy</Text>
                  <Icon name="right" style={{fontSize: 20}} />
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.text}>Help Center</Text>
                  <Icon name="right" style={{fontSize: 20}} />
                </View>
                <View style={styles.viewStyle}>
                  <Text style={styles.text}>Logout</Text>
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
    marginTop: 10,
    fontWeight: 'bold',
    color: 'white',
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
