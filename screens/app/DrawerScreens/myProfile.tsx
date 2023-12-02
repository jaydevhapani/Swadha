import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import commanStyles from '../../utilies/commanStyles';
import CommonHeader from '../../components/commonHeader';
import {useDrawerStatus} from '@react-navigation/drawer';
import colors from '../../utilies/colors';
import CommonTextInput from '../../components/commonTextInput';
import i18n from '../../utilies/i18n';
import CommonButton from '../../components/commonButton';
import CommonAlertBox from '../../components/commonAlertBox';
import {HEIGHT} from '../../utilies/constant';
import CommanProfileBox from '../../components/commanProfileBox';

type Props = {
  navigation: any;
};

const MyProfile = (props: Props) => {
  const [isPopUp, setIsPopUp] = useState(true);
  return (
    <SafeAreaView style={commanStyles.Container}>
      <CommonHeader
        isMenu={true}
        isDrawerFlag={useDrawerStatus()}
        navigation={props.navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        style={[{flex: 1}]}>
        {isPopUp && (
          <View
            style={{
              height: HEIGHT,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CommonAlertBox onPress={() => setIsPopUp(false)} />
          </View>
        )}
        {!isPopUp && (
          <View style={[commanStyles.Container, commanStyles.pH10]}>
            <Text style={commanStyles.HeaderText}>My Profile</Text>
            <View>
              <CommanProfileBox />
              <TouchableOpacity
                style={styles.absoluteButton}></TouchableOpacity>
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: 350,
                marginTop: 40,
              }}>
              <CommonTextInput
                title={'Name'}
                placeHolder={'Enter Your Name'}
                onChange={(t: any) => {}}
                inputViewStye={''}
                textInputStyle={''}
                maxLength={10}
                keyboardType={''}
              />
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: 350,
                marginTop: 40,
              }}>
              <CommonTextInput
                title={'Email Address'}
                placeHolder={'Enter Your Email Address'}
                onChange={(t: any) => {}}
                inputViewStye={''}
                textInputStyle={''}
                maxLength={10}
                keyboardType={''}
              />
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: 350,
                marginTop: 40,
              }}>
              <CommonTextInput
                title={'Phone Number'}
                placeHolder={'Phone Number'}
                onChange={(t: any) => {}}
                inputViewStye={''}
                textInputStyle={''}
                maxLength={10}
                keyboardType={'number-pad'}
              />
            </View>
            <View
              style={{
                marginTop: 20,
              }}>
              <CommonButton
                BUttonStyle={{height: 45}}
                onPress={() => {}}
                textStyle={''}
                title={'Update'}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  absoluteButton: {
    position: 'absolute',
    backgroundColor: 'pink',
    height: 35,
    width: 35,
    borderRadius: 20,
    alignSelf: 'center',
    bottom: -10,
    right: 150,
  },
});

export default MyProfile;
