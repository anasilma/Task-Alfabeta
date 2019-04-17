import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import LoginForm from './component/LoginForm/LoginForm';
import MapLocations from './component/AppMaps/MapsLocations';
import TravelLine from './component/AppMaps/TravelLine';
import TableMaps from './component/AppMaps/TableMaps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from './component/AppHome/SplashScreen';

const HomeNavigator = createSwitchNavigator(
  {
    Home: { screen: MapLocations },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Loc: { screen: HomeNavigator },
    Line: { screen: TravelLine },
    Tabel: { screen: TableMaps }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Loc') {
          iconName = 'md-locate';
        } else if (routeName === 'Line') {
          iconName = 'md-navigate';
        } else if (routeName === 'Tabel') {
          iconName = 'md-clipboard';
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: '#0a3565',
      inactiveTintColor: 'gray',
    },
  },
)

const MainNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Login: LoginForm,
  Bot: TabNavigator
});


const Router = createAppContainer(MainNavigator);

export default Router;