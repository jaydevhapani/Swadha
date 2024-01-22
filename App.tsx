import {Alert, AppState, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import ScreenNavigation from './screens/navigations/screenNavigation';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store from './screens/reduxConfig/store';
import netInfo from '@react-native-community/netinfo';
import CommonLoader from './screens/components/commonLoader';
import Geolocation from '@react-native-community/geolocation';
import i18n from './screens/utilies/i18n';

//GLOBAL PROPS
type Props = {};

//GLOBAL VARIALBLES OPRATION
declare global {
  var isInterNetConection: boolean;
  var accessToken: string;
  var cid: String;
}

//REDUX PART
let persister = persistStore(store);

//CHECK INTERNET OPRATION
const interNetConnectivity = async () => {
  netInfo.addEventListener(state => {
    if (state.isInternetReachable || state.isConnected) {
      global.isInterNetConection = true;
      global.accessToken = '5dc259a22d32db0a716a44dab909e80a';
    } else {
      global.isInterNetConection = false;
      Alert.alert('Opps! No Internet Connection.');
    }
  });
};

//CallApiEvryTimeOn#0Min
const getUserLocation = async () => {
  Geolocation.getCurrentPosition(info => {
    console.log("location : ", info);
    
    startInveralOfAPi(info);
  });
};
let Interval: NodeJS.Timeout;
//startInveralOfAPi
const startInveralOfAPi = (info: any) => {
  Interval = setInterval(() => {
    if (global.cid && global.accessToken) {
      callAPiOfUpdateLocation(info);
    }
  }, 1800000); // 30 minutes in milliseconds
  // 1800000
};

//callAPiOfUpdateLocation
const callAPiOfUpdateLocation = async (info: any) => {
  let Object = {
    token: global.accessToken,
    cid: global.cid,
    latitude: info.coords.latitude,
    longitude: info.coords.longitude,
  };
  await fetch('https://finsolve.in/testing/apifin/updateLocation', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${global.accessToken}`,
    },
    body: JSON.stringify(Object),
  })
    .then(response => response.json())
    .then(json => {
      console.log('JsonData', json);
    })
    .catch(error => {
      console.log('error ::: ', error);
      return error;
    });
};

//APPLICATION START
const App = (props: Props) => {
  useEffect(() => {
    getUserLocation();
    interNetConnectivity();
    return () => clearInterval(Interval);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <NavigationContainer>
          <ScreenNavigation />
          <CommonLoader />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
