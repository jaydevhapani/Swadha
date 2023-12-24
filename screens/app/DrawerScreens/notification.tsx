import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import commanStyles from '../../utilies/commanStyles';
import CommonHeader from '../../components/commonHeader';
import {useDrawerStatus} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {Post_Api} from '../../apiHelper/apiHelper';
import apiName from '../../apiHelper/apiName';
import {useIsFocused} from '@react-navigation/native';
import i18n from '../../utilies/i18n';
import colors from '../../utilies/colors';
import CommonButton from '../../components/commonButton';

type Props = {
  navigation: any;
};

const Notification = (props: Props) => {
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState();
  const focus = useIsFocused();

  useEffect(() => {
    getAllNotification();
  }, [focus]);

  //getAllNotification
  const getAllNotification = async () => {
    const Object = {
      token: global.accessToken,
      cid: global.cid,
    };
    try {
      await Post_Api(apiName.getNotifications, Object, dispatch)
        .then(json => {
          if (json) {
            setNotifications(json.data);
          }
        })
        .catch(error => {});
    } catch (error) {}
  };

  //chanhgeValueOfKey
  const chanhgeValueOfKey = (index: number) => {
    var newArray = [...notifications];
    newArray[index].isOpen =
      newArray[index].isOpen == undefined
        ? true
        : newArray[index].isOpen == false
        ? true
        : false;
    setNotifications(newArray);
  };

  //renderItems
  const renderItems = (item: any, index: number) => {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderTopColor: colors.lightGray,
          borderBottomColor: colors.lightGray,
          paddingVertical: 10,
        }}
        onPress={() => chanhgeValueOfKey(index)}
        key={index}>
        <Text style={styles.notificationHeaderText}>{item.title}</Text>
        {item?.isOpen && (
          <Text style={styles.notificationHeaderMessage}>{item.message}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={commanStyles.Container}>
      <CommonHeader
        isMenu
        isDrawerFlag={useDrawerStatus()}
        navigation={props?.navigation}
      />
      <View style={[commanStyles.Container, commanStyles.pH10]}>
        <Text style={commanStyles.HeaderText}>
          {i18n.SwadhaText + '-' + 'Notifications'}
        </Text>
        <Text style={styles.headerText1}>{'New Notifications'}</Text>
        <View>
          {notifications && (
            <FlatList
              style={{marginTop: 20}}
              data={notifications}
              renderItem={({item, index}) => renderItems(item, index)}
              ItemSeparatorComponent={() => <View style={{marginTop: 20}} />}
            />
          )}
        </View>
        <TouchableOpacity
          style={{
            height: 36,
            paddingVertical: 4,
            paddingHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.colorRed,
            borderRadius: 100,
            alignSelf : 'center',
            marginVertical : 20,
          }}
          onPress={() => {}}>
          <Text style={{color: colors.colorWhite}}>{'Clear Notifications'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  headerText1: {
    color: colors.colorBlack,
    fontSize: 16,
    alignSelf: 'center',
    letterSpacing: 0.4,
    fontFamily: 'Montserrat-Medium',
    marginTop: 20,
  },
  notificationHeaderText: {
    color: colors.DarkBlue,
    fontSize: 16,
    letterSpacing: 0.4,
    fontFamily: 'Montserrat-Medium',
  },
  notificationHeaderMessage: {
    color: colors.colorBlack,
    fontSize: 14,
    letterSpacing: 0.4,
    fontFamily: 'Montserrat-Medium',
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
