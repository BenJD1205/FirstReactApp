import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import {Home, Restaurant, OrderDelivery} from './screens'

import Tab from './navigation/tabs'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false 
        }}
      >
        <Stack.Screen name="Home" component={Tab} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="Orderdelivery" component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
