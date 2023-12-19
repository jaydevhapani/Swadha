import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenName} from './screenName';
import onboarding from '../app/Onbording/onboarding';
import locationService from '../app/LocationService/locationService';
import Splash from '../app/Splash/splash';
import Login from '../app/Auth/login';
import {createDrawerNavigator, useDrawerStatus} from '@react-navigation/drawer';
import DashBoard from '../app/DrawerScreens/dashBoard';
import CustomSidebarMenu from './drawerSlid';
import MyProfile from '../app/DrawerScreens/myProfile';
import LoanStatus from '../app/DrawerScreens/loanStatus';
import EmiCalculation from '../app/DrawerScreens/emiCalculation';
import ManDateDetails from '../app/DrawerScreens/manDateDetails';
import AdvanceEmi from '../app/DrawerScreens/advanceEmi';
import ForeCloseLoan from '../app/DrawerScreens/foreCloseLoan';
import EmiHolidays from '../app/DrawerScreens/emiHolidays';
import GetInTouch from '../app/DrawerScreens/getInTouch';
import ApplyNewLoan from '../app/DrawerScreens/applyNewLoan';
import PayOverDue from '../app/DrawerScreens/payOverDue';
import PartPayment from '../app/DrawerScreens/partPayment';
import images from '../assests/images';
import MyLoan from '../app/DrawerScreens/myLoan';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ScreenName.DashBoard}
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name={ScreenName.DashBoard}
        component={DashBoard}
        options={{
          drawerLabel: images.dashboard,
        }}
      />
      <Drawer.Screen
        name={ScreenName.MyLoan}
        component={MyLoan}
        options={{
          drawerLabel: images.profile,
        }}
      />
      <Drawer.Screen
        name={ScreenName.MyProfile}
        component={MyProfile}
        options={{
          drawerLabel: images.profile,
        }}
      />
      <Drawer.Screen
        name={ScreenName.EmiCalculation}
        component={EmiCalculation}
        options={{
          drawerLabel: images.emi,
        }}
      />
      <Drawer.Screen
        name={ScreenName.ManDateDetails}
        component={ManDateDetails}
        options={{
          drawerLabel: images.accountDetails,
        }}
      />
      <Drawer.Screen
        name={ScreenName.GetInTouch}
        component={GetInTouch}
        options={{
          drawerLabel: images.contact,
        }}
      />
      <Drawer.Screen
        name={ScreenName.ApplyNewLoan}
        component={ApplyNewLoan}
        options={{
          drawerLabel: images.applyLoan,
        }}
      />
    </Drawer.Navigator>
  );
};

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
      <Stack.Screen name={ScreenName.DashBoard} component={DrawerNavigation} />
      <Stack.Screen name={ScreenName.LoanStatus} component={LoanStatus} />
      <Stack.Screen name={ScreenName.AdvanceEmi} component={AdvanceEmi} />
      <Stack.Screen name={ScreenName.ForeCloseLoan} component={ForeCloseLoan} />
      <Stack.Screen name={ScreenName.EmiHolidays} component={EmiHolidays} />
      <Stack.Screen name={ScreenName.PayOverDue} component={PayOverDue} />
      <Stack.Screen name={ScreenName.PartPayment} component={PartPayment} />
    </Stack.Navigator>
  );
}
