import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Home, Inform, User, Favourite } from "../screens";

import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel:false,
                tabBarStyle: {
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0,
                }
            }}
            initialRouteName="Home"
        >
            {/* Home */}
            <Tab.Screen 
                name="Main"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor:(focused ? COLORS.primary : COLORS.secondary)
                            }}
                        />
                    )
                }}
            />
            {/* Search */}
            <Tab.Screen 
                name="Search"
                component={Inform}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor:(focused ? COLORS.primary : COLORS.secondary)
                            }}
                        />
                    )
                }}
            />
            {/* Yêu thích */}
            <Tab.Screen 
                name="Like"
                component={Favourite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.like}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor:(focused ? COLORS.primary : COLORS.secondary)
                            }}
                        />
                    )
                }}
            />
            {/* User */}
            <Tab.Screen 
                name="User"
                component={User}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor:(focused ? COLORS.primary : COLORS.secondary)
                            }}
                        />
                    )
                }}
            />
                
        </Tab.Navigator>
    )
}

export default Tabs