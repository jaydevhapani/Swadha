import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenName} from './screenName';
import onboarding from '../app/Onbording/onboarding';
import locationService from '../app/LocationService/locationService';
import Splash from '../app/Splash/splash';
import Login from '../app/Auth/login';

const Stack = createStackNavigator();

export default function ScreenNavigation(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName={ScreenName.Splash}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenName.Splash} component={Splash} />
      <Stack.Screen name={ScreenName.Onboarding} component={onboarding} />
      <Stack.Screen
        name={ScreenName.LocationService}
        component={locationService}
      />
      <Stack.Screen name={ScreenName.Login} component={Login} />
    </Stack.Navigator>
  );
}
