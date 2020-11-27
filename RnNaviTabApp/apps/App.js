/* eslint-disable prettier/prettier */
import {createAppContainer} from 'react-navigation';
//import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import React from 'react';
import HomeScreen from './components/HomeScreen';
import SettingScreen from './components/SettingScreen';
import DetailScreen from './components/DetailScreen';

import Icon from 'react-native-vector-icons/AntDesign';
import { View } from 'react-native';

const TabNavigator = createMaterialBottomTabNavigator({//createMaterialBottomTabNavigator 애니메이션효과
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={{color: tintColor}} size={25} name={'home'} />
        </View>
      ),
      activeColor: '#dc143c',
      inactivateColor: '#226557',
      barStyle: {backgroundColor: '#ffc0cb'},//분홍색
    }
  },
  Detail: {screen: DetailScreen,navigationOptions: {
    tabBarLabel: 'Detail',
    tabBarIcon: ({tintColor}) => (
      <View>
        <Icon style={{color: tintColor}} size={25} name={'appstore1'} />
      </View>
    ),
    activeColor: '#000080',
    inactivateColor: '#226557',
    barStyle: {backgroundColor: '#b0c4de'},
    },
},  
  
  Setting: {screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={{color: tintColor}} size={25} name={'setting'} />
        </View>
      ),
      activeColor: '#497649',
      inactivateColor: '#226557',
      barStyle: {backgroundColor: '#8fbc8f'},//녹차색
    },
  },
  },
  {
    initailRouteName:'Home',
    shifting: true,//선택된것만 글자나옴
    swipeEnabled: true,
    showIcon:true,
  }
// {
//   defaultNavigationOptions: ({navigation}) => ({
//     swipeEnabled: true,
//     tabBarIcon: ({horizontal, tintColor}) => {
//       const {routeName} = navigation.state; //Home/Detail/Setting
//       var iconName;
//       if (routeName === 'Home') {iconName = 'home';}
//       else if (routeName === 'Detail') {iconName = 'appstore1';}
//       else if (routeName === 'Setting') {iconName = 'setting';}

//       return (
//         <Icon 
//           name={iconName}
//           size={22}
//           color={tintColor} />
//       );
//     }
//   }),
  // tabBarOptions: {
  //   activeTintColor: '#ffffff',//활성화때 흰색
  //   inactiveTintColor: '#a9a9a9',//비활성화때 회색
  //   style: {
  //     backgroundColor:'#000000',
  //   }
  // }
//}
);

export default createAppContainer(TabNavigator);
