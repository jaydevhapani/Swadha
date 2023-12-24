import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import commanStyles from '../../utilies/commanStyles';
import CommonHeader from '../../components/commonHeader';
import {useDrawerStatus} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import apiName from '../../apiHelper/apiName';
import {Post_Api} from '../../apiHelper/apiHelper';

type Props = {
  navigation: any;
};

const PrivacyPolicy = (props: Props) => {
  const dispatch = useDispatch();
  const focus = useIsFocused();
  const [HtmlTag, setHtmlTag] = useState();

  useEffect(() => {
    getPrivacyData();
  }, [focus]);

  //getPrivacyData
  const getPrivacyData = async () => {
    const Object = {
      token: global.accessToken,
    };
    try {
      await Post_Api(apiName.getPrivacyPolicy, Object, dispatch)
        .then(json => {
          if (json) {
            console.log('====================================');
            console.log(json);
            console.log('====================================');
          }
        })
        .catch(error => {});
    } catch (error) {}
  };
  return (
    <SafeAreaView style={commanStyles.Container}>
      <CommonHeader
        isMenu
        isDrawerFlag={useDrawerStatus()}
        navigation={props?.navigation}
      />
    </SafeAreaView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({});
