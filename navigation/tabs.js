/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import {
    createBottomTabNavigator,
    BottomTabBar,
} from '@react-navigation/bottom-tabs';
import { Home, Scan } from '../screens';
import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let source;

                    if (route.name === 'Home') {
                        source = icons.more;
                        // ? 'ios-information-circle'
                        // : 'ios-information-circle-outline';
                    } else if (route.name === 'Scan') {
                        source = icons.scan;
                    } else if (route.name === 'User') {
                        source = icons.user;
                    }

                    // You can return any component that you like here!
                    return <Image source={source} style={{ width: focused ? size * 0.8 : size , height: focused ? size * 0.8 : size  }} tintColor={color} />;
                },
                
                tabBarStyle: { backgroundColor: 'transparent', elevation:0 },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.secondary,
                tabBarInactiveTintColor: COLORS.darkgray
            })}>
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Scan"
                component={Scan}
            />
            <Tab.Screen
                name="User"
                component={Home}
            />
        </Tab.Navigator>
    );
};
export default Tabs;
