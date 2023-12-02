import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNavigation from './screens/navigations/screenNavigation';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store from './screens/reduxConfig/store';
import netInfo from '@react-native-community/netinfo';
import CommonLoader from './screens/components/commonLoader';

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

//APPLICATION START
const App = (props: Props) => {
  useEffect(() => {
    interNetConnectivity();
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
