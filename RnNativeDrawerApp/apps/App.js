import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import SettingScreen from './components/SettingScreen';
import CustomDrawer from './CustomDraw';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen},
    Setting: {screen: SettingScreen},
  },
  {
    contentComponent: CustomDrawer,
    drawerWidth: Dimensions.get('window').width - 100,
  },
);
export default createAppContainer(DrawerNavigator);
