import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Breakfast from './recipes/Breakfast';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Dinner from './recipes/Dinner';
import Lunch from './recipes/Lunch';
import Snacks from './recipes/Snacks';
import React, {Component} from 'react';
import {Container, Header, Tab, Tabs, ScrollableTab} from 'native-base';
export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#51B6F5" barStyle="light-content" />
        <View style={styles.header}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              margin: 15,
            }}>
            <Text style={styles.textStyle}>Recipes</Text>
          </View>
        </View>

        <Tabs
          style={{backgroundColor: '#51B6F5'}}
          tabBarUnderlineStyle={{
            backgroundColor: '#51B6F5',
          }}
          renderTabBar={() => <ScrollableTab />}>
          <Tab
            heading="Breakfast"
            tabStyle={{backgroundColor: '#fff'}}
            textStyle={{color: '#000'}}
            activeTabStyle={{backgroundColor: '#fff'}}
            activeTextStyle={{color: '#51B6F5', fontWeight: 'bold'}}>
            <Breakfast />
          </Tab>
          <Tab
            heading="Lunch"
            tabStyle={{backgroundColor: '#fff'}}
            textStyle={{color: '#000'}}
            activeTabStyle={{backgroundColor: '#fff'}}
            activeTextStyle={{color: '#51B6F5', fontWeight: 'bold'}}>
            <Lunch />
          </Tab>
          <Tab
            heading="Dinner"
            tabStyle={{backgroundColor: '#fff'}}
            textStyle={{color: '#000'}}
            activeTabStyle={{backgroundColor: '#fff'}}
            activeTextStyle={{
              color: '#51B6F5',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            <Dinner />
          </Tab>

          <Tab
            heading="Snacks"
            tabStyle={{backgroundColor: '#fff'}}
            textStyle={{color: '#000'}}
            activeTabStyle={{backgroundColor: '#fff'}}
            activeTextStyle={{color: '#51B6F5', fontWeight: 'bold'}}>
            <Snacks />
          </Tab>
        </Tabs>
      </Container>
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
