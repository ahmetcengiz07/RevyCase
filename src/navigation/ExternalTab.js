import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from '../tabIcons/icons';
import ReelsScreen from '../screens/ReelsScreen';
import SearchScreen from '../screens/SearchScreen';
import LikeScreen from '../screens/LikeScreen';
import {useSelector} from 'react-redux';
import InternalStack from './InternalStack';

const ExternalTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({size, color}) => (
            <Icons
              iconName={route.name}
              color={color}
              width={size}
              height={size}
            />
          ),
          tabBarActiveTintColor: 'black',
          headerShown: false,
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Like" component={LikeScreen} />
        <Tab.Screen name="ProfilePhoto" component={InternalStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ExternalTab;
