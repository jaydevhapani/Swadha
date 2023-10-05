import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import navigationService from '../../navigations/navigationService';
import {ScreenName} from '../../navigations/screenName';

type Props = {
  [x: string]: any;
};

const Splash = (props: Props) => {
  useEffect(() => {
    navigationService.setTopLevelNavigator(props?.navigation);
    setTimeout(() => {
      navigationService.resetAndRedirect(ScreenName.Onboarding);
    }, 1500);
  }, [props]);
  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
