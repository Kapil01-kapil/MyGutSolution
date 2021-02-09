import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/AntDesign';

class Toolbar extends Component {
  updateState = () => {
    this.setState({myState: 'The state is updated'});
  };
  render() {
    return (
      <View style={styles.toolbar}>
        <Text>glj</Text>
        <Text>jblkj</Text>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  toolbar: {
    paddingTop: 10,
    width: '100%',
  },
  toolbarButton: {
    width: 50,
    color: '#fff',
    textAlign: 'center',
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
});

export default withNavigation(Toolbar);
