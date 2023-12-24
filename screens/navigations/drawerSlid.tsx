// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import {DrawerContentScrollView} from '@react-navigation/drawer';
import CommonFooterLogo from '../components/commonFooterLogo';
import images from '../assests/images';
import colors from '../utilies/colors';

const CustomSidebarMenu = (props: any) => {
  // console.log(props?.descriptors);

  const getImageOfObject = (index: any) => {
    const key = Object.keys(props?.descriptors)[index];
    return props?.descriptors[key].options.drawerLabel;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props} style={{padding: 10}}>
        <View style={styles.upperBox}>
          <CommonFooterLogo imageStyle={styles.imageStyle} />
          <Image
            source={images.LogOut}
            style={{
              height: 30,
              width: 30,
              transform: [{rotate: '90deg'}],
            }}
          />
        </View>
        <View style={{height: 30}} />
        {props?.state?.routes?.map((_item: any, _index: number) => {
          if (_index <= 6) {
            return (
              <View key={_index}>
                <TouchableOpacity
                  style={[
                    styles.Items,
                    props?.navigation?.getState()?.index == _index && {
                      borderTopWidth: 0.5,
                      borderTopColor: colors.colorBlack,
                      borderBottomWidth: 0.5,
                      borderBottomColor: colors.colorBlack,
                      paddingTop: 8,
                      paddingBottom: 8,
                    },
                  ]}
                  onPress={() => {
                    props?.navigation?.navigate(_item.name);
                  }}>
                  {props?.navigation?.getState()?.index !== _index && (
                    <Image
                      source={getImageOfObject(_index)}
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: colors.DarkBlue,
                      }}
                    />
                  )}

                  <Text style={styles.ItemText}>{_item.name}</Text>
                </TouchableOpacity>
              </View>
            );
          }
        })}
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: colors.lightGray,
            marginVertical: 20,
          }}
        />
        {props?.state?.routes?.map((_item: any, _index: number) => {
          if (_index >= 7) {
            return (
              <View key={_index}>
                <TouchableOpacity
                  style={[
                    styles.Items,
                    props?.navigation?.getState()?.index == _index && {
                      borderTopWidth: 0.5,
                      borderTopColor: colors.colorBlack,
                      borderBottomWidth: 0.5,
                      borderBottomColor: colors.colorBlack,
                      paddingTop: 8,
                      paddingBottom: 8,
                    },
                  ]}
                  onPress={() => {
                    props?.navigation?.navigate(_item.name);
                  }}>
                  {props?.navigation?.getState()?.index !== _index && (
                    <Image
                      source={getImageOfObject(_index)}
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: colors.DarkBlue,
                      }}
                    />
                  )}
                  <Text style={styles.ItemText}>{_item.name}</Text>
                </TouchableOpacity>
              </View>
            );
          }
        })}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  upperBox: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  imageStyle: {
    height: 30,
    width: 100,
    alignSelf: 'center',
    marginBottom: 0,
  },
  Items: {
    marginTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  ItemText: {
    fontSize: 18,
    color: colors.ButtonColor,
    fontWeight: '800',
    letterSpacing: 0.5,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 10,
  },
});

export default CustomSidebarMenu;
