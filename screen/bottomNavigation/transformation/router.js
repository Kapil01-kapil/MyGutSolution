import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import BowlMovement from './transformation/BowlMovement';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import DietReport from './transformation/DietReport';
import Mood from './transformation/Mood';
import SymptomsReport from './transformation/SymptomsReport';
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
            <Text style={styles.textStyle}>Transformation</Text>
          </View>
        </View>

        <Tabs
          style={{backgroundColor: '#51B6F5'}}
          tabBarUnderlineStyle={{
            backgroundColor: '#51B6F5',
          }}
          renderTabBar={() => <ScrollableTab />}>
          <Tab
            heading="Diet"
            tabStyle={{backgroundColor: '#fff'}}
            textStyle={{color: '#000'}}
            activeTabStyle={{backgroundColor: '#fff'}}
            activeTextStyle={{color: '#51B6F5', fontWeight: 'bold'}}>
            <DietReport />
          </Tab>
          <Tab
            heading="Symptoms"
            tabStyle={{backgroundColor: '#fff'}}
            textStyle={{color: '#000'}}
            activeTabStyle={{backgroundColor: '#fff'}}
            activeTextStyle={{color: '#51B6F5', fontWeight: 'bold'}}>
            <SymptomsReport />
          </Tab>
          <Tab
            heading="BowlMovement"
            tabStyle={{backgroundColor: '#fff'}}
            textStyle={{color: '#000'}}
            activeTabStyle={{backgroundColor: '#fff'}}
            activeTextStyle={{
              color: '#51B6F5',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            <BowlMovement />
          </Tab>

          <Tab
            heading="Mood"
            tabStyle={{backgroundColor: '#fff'}}
            textStyle={{color: '#000'}}
            activeTabStyle={{backgroundColor: '#fff'}}
            activeTextStyle={{color: '#51B6F5', fontWeight: 'bold'}}>
            <Mood />
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
