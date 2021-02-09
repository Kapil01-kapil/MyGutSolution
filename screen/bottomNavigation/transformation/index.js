import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import AppNavigator from './router';
const AppIndex = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#51B6F5" barStyle="light-content" />
        <View style={styles.header}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={styles.textStyle}>Transformation</Text>
          </View>
        </View>
        <AppIndex />
      </View>
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
