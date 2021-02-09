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
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#51B6F5',
    paddingHorizontal: 18,
    paddingTop: 5,
  },
  textStyle: {
    fontSize: 18,

    fontWeight: 'bold',
    textAlign: 'center',

    color: 'white',
  },
});
