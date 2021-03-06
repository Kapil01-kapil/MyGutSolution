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
                <View
                  style={{
                    flexDirection: 'row',
                    margin: 15,
                    justifyContent: 'flex-end',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                    }}>
                    <Text style={styles.textStyle}>IBS Guide</Text>
                  </View>
                  <Icon
                    name="arrowleft"
                    style={{fontSize: 24, color: '#FFF'}}
                    onPress={() => this.props.navigation.goBack(null)}
                  />
                </View>
              </View>
              <View style={{flexDirection: 'row', margin: 15}}>
                <Image
                  source={require('../../assets/smile.png')}
                  style={{width: 25, height: 25, marginRight: 15}}
                />
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Topics</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 15,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.text}>What is IBS</Text>
                <Image
                  source={require('../../assets/smile.png')}
                  style={{width: 25, height: 25, marginRight: 15}}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 15,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.text}>Diet & IBS</Text>
                <Icon
                  name="right"
                  style={{fontSize: 20}}
                  onPress={() => this.props.navigation.goBack(null)}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 15,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.text}>CBT & IBS</Text>
                <Icon
                  name="right"
                  style={{fontSize: 20}}
                  onPress={() => this.props.navigation.goBack(null)}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 15,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.text}>Travelling</Text>
                <Icon
                  name="right"
                  style={{fontSize: 20}}
                  onPress={() => this.props.navigation.goBack(null)}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 15,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.text}>Medications</Text>
                <Icon
                  name="right"
                  style={{fontSize: 20}}
                  onPress={() => this.props.navigation.goBack(null)}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 15,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.text}>Problems</Text>
                <Icon
                  name="right"
                  style={{fontSize: 20}}
                  onPress={() => this.props.navigation.goBack(null)}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 15,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.text}>Exercise</Text>
                <Icon
                  name="right"
                  style={{fontSize: 20}}
                  onPress={() => this.props.navigation.goBack(null)}
                />
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
  },
  viewStyle: {
    flexDirection: 'row',
    margin: 15,

    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 18,

    fontWeight: 'bold',
    textAlign: 'center',

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
