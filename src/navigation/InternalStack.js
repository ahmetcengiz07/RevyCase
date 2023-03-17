import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Stories from '../screens/Stories';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const InternalStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Stories" component={Stories} />
    </Stack.Navigator>
  );
};

export default InternalStack;
