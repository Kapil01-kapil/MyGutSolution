import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './screen/Login';
import ForgotPassword from './screen/ForgotPassword';
import OtpScreen from './screen/OtpScreen';
import Signup from './screen/Signup';
import SplashScreen from './screen/SplashScreen';
import Index from './screen/bottomNavigation/Index';
import Breakfast from './screen/bottomNavigation/homescreen/foodtype/Breakfast';
import DietReport from './screen/bottomNavigation/ibsGuide/ibsGuide/DietReport';
import Profile from './screen/bottomNavigation/more/more/Profile';
import router from './screen/bottomNavigation/recipes/router';
import transformation from './screen/bottomNavigation/transformation/router';
import Sarving from './screen/bottomNavigation/recipes/recipes/Sarving';
import QuestionAnswer from './screen/bottomNavigation/ibsGuide/ibsGuide/QuestionAnswer';
import BreakfastSave from './screen/bottomNavigation/homescreen/foodtype/BreakfastSave';
const AppNavigator = createStackNavigator(
  {
    BreakfastSave: BreakfastSave,
    QuestionAnswer: QuestionAnswer,
    DietReport: DietReport,
    Sarving: Sarving,
    Index: Index,
    Breakfast: Breakfast,
    DietReport: DietReport,
    Profile: Profile,
    router: router,
    transformation: transformation,
    Login: Login,
    ForgotPassword: ForgotPassword,
    OtpScreen: OtpScreen,
    Signup: Signup,
    SplashScreen: SplashScreen,
    Breakfast: Breakfast,
  },
  {
    initialRouteName: 'BreakfastSave',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
