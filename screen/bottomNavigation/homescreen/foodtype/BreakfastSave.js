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
      <View style={styles.containerView}>
        <View style={{backgroundColor: '#51B6F5'}}>
          <View style={styles.viewStyle}>
            <Icon
              name="arrowleft"
              style={{fontSize: 24, color: '#FFF'}}
              onPress={() => this.props.navigation.goBack(null)}
            />

            <Text style={styles.textStyle}>Breakfast</Text>
            <Text style={styles.textStyle}>Save </Text>
          </View>
        </View>
        <View>
          <View>
            <Text>Banana</Text>

            <Text>Furit, 1.0 whole</Text>
          </View>
          <View>
            <Text>Number of Serving </Text>
          </View>
          <View>
            <Text>Serving Size </Text>
          </View>
        </View>
      </View>
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
