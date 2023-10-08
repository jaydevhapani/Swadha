import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../utilies/colors';
import images from '../assests/images';
import navigationService from '../navigations/navigationService';

type Props = {
  isMenu: any;
  isDrawerFlag: String;
  navigation: any;
};

const CommonHeader = (props: Props) => {
  return (
    <View style={styles.Box}>
      <View
        style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
        {props.isMenu && (
          <TouchableOpacity
            onPress={() => {
              if (props.isDrawerFlag == 'open') {
                props?.navigation.closeDrawer();
              } else {
                props?.navigation?.openDrawer();
              }
            }}>
            <Image
              source={images.Menu}
              style={{height: 36, width: 36}}
              tintColor={colors.colorWhite}
            />
          </TouchableOpacity>
        )}
        {!props.isMenu && (
          <TouchableOpacity
            onPress={() => {
              navigationService.goBack();
            }}>
            <Image
              source={images.arrow}
              style={{height: 26, width: 26}}
              tintColor={colors.colorWhite}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{flex: 2.5}}></View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.Profile} />
      </View>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  Box: {
    height: 80,
    backgroundColor: colors.ButtonColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  Profile: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.gray1,
  },
});
