import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
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

type Props = {
  navigation: any;
};

const ApplyNewLoan = (props: Props) => {
  return (
    <SafeAreaView style={commanStyles.Container}>
      <CommonHeader
        isMenu={true}
        isDrawerFlag={useDrawerStatus()}
        navigation={props.navigation}
      />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}>
          <View style={[commanStyles.Container, commanStyles.pH10]}>
            <Text style={commanStyles.HeaderText}>Apply New Loan</Text>
            <View
              style={{
                alignSelf: 'center',
                width: 350,
                marginTop: 40,
              }}>
              <CommonTextInput
                title={'Amount Required'}
                placeHolder={'10000'}
                onChange={(t: any) => {}}
                maxLength={10}
                keyboardType={'number-pad'}
              />
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: 350,
                marginTop: 40,
              }}>
              <CommonTextInput
                title={'Purpose of Loan'}
                placeHolder={''}
                onChange={(t: any) => {}}
                maxLength={10}
                keyboardType={'number-pad'}
              />
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: 350,
                marginTop: 40,
              }}>
              <CommonTextInput
                title={'Urgency'}
                placeHolder={''}
                onChange={(t: any) => {}}
                maxLength={10}
              />
            </View>

            <View
              style={{
                alignSelf: 'center',
                width: 350,
                marginTop: 40,
              }}>
              <CommonTextInput
                title={'Message'}
                placeHolder={'Hello, write your query here..'}
                onChange={(t: any) => {}}
                maxLength={10}
              />
            </View>

            <View
              style={{
                marginTop: 30,
              }}>
              <CommonButton
                BUttonStyle={{
                  height: 45,
                  width: 180,
                  backgroundColor: colors.colorRed,
                }}
                onPress={() => {}}
                textStyle={''}
                title={'Send Message'}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Profile: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: colors.gray1,
    marginTop: 20,
  },
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

export default ApplyNewLoan;
