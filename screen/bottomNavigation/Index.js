//This is an example code for Bottom Navigation//
import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//For React Navigation 3+
//import {
//  createStackNavigator,
//  createBottomTabNavigator,
//  createAppContainer,
//} from 'react-navigation';

//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './homescreen/Home';
import IBS from './ibsGuide/IBSGuide';
import Transformation from './transformation/router';
import Recipes from './recipes/router';
import More from './more/More';
const Homes = createStackNavigator(
  {
    //Defination of Navigaton from home screen

    Home: {screen: Home},
  },
  {
    headerMode: 'none',
  },
);
const IBSs = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    IBS: {screen: IBS},
  },
  {
    headerMode: 'none',
  },
);
const Transformations = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Transformation: {screen: Transformation},
  },
  {
    headerMode: 'none',
  },
);
const Recipess = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Recipes: {screen: Recipes},
  },
  {
    headerMode: 'none',
  },
);
const Mores = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    More: {screen: More},
  },
  {
    headerMode: 'none',
  },
);
const App = createBottomTabNavigator(
  {
    Home: {screen: Homes},
    IBS: {screen: IBSs},
    Transformation: {screen: Transformations},
    Recipes: {screen: Recipess},
    More: {screen: Mores},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused
            ? require('../assets/home.png')
            : require('../assets/home.png');
        } else if (routeName === 'IBS') {
          iconName = focused
            ? require('../assets/home.png')
            : require('../assets/home.png');
        } else if (routeName === 'Transformation') {
          iconName = focused
            ? require('../assets/home.png')
            : require('../assets/home.png');
        } else if (routeName === 'Recipes') {
          iconName = focused
            ? require('../assets/home.png')
            : require('../assets/home.png');
        } else if (routeName === 'More') {
          iconName = focused
            ? require('../assets/home.png')
            : require('../assets/home.png');
        }
        return <Image source={iconName} style={{width: 20, height: 20}} />;
      },
    }),
  },
);
export default createAppContainer(App);
