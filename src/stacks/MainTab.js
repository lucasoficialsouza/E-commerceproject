import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Appointments from '../screens/Appointments';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen  nome='Home' component={Home}/>
        <Tab.Screen  nome='Search' component={Search}/>
        <Tab.Screen  nome='Appointments' component={Appointments}/>
        <Tab.Screen  nome='Favorites' component={Favorites}/>
        <Tab.Screen  nome='Profile' component={Profile}/>
        <Tab.Screen  nome='MainTab' component={MainTab}/>
    </Tab.Navigator>
);