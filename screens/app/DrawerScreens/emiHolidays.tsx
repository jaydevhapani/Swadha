import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import commanStyles from '../../utilies/commanStyles';
import CommonHeader from '../../components/commonHeader';
import colors from '../../utilies/colors';
import images from '../../assests/images';
import CommonButton from '../../components/commonButton';

type Props = {
  navigation: any;
};

const EmiHolidays = (props: Props) => {
  return (
    <SafeAreaView style={commanStyles.Container}>
      <CommonHeader
        isDrawerFlag={''}
        isMenu={false}
        navigation={props.navigation}
      />
      <ScrollView>
        <View style={[commanStyles.Container, commanStyles.pH10]}>
          <Text style={commanStyles.HeaderText}>EMI Holidays</Text>
          <View
            style={{
              width: 370,
              borderRadius: 10,
              shadowColor: colors.lightBlack,
              shadowOffset: {width: -2, height: 4},
              shadowOpacity: 0.2,
              shadowRadius: 3,
              elevation: 4,
              alignSelf: 'center',
              backgroundColor: colors.snowBlue,
              marginTop: 20,
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={style.HeadLine}>{'LAN'}:</Text>
              <Text style={style.answerLine}>{'8618726187226781'}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={style.HeadLine}>{'EMI Amount'}:</Text>
              <Text style={style.answerLine}>{'13000'}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={style.HeadLine}>{'EMI Date'}:</Text>
              <Text style={style.answerLine}>{'8th - Aug - 2023'}</Text>
            </View>
            <View
              style={{
                borderWidth: 0.4,
                borderColor: colors.gray1,
                height: 1,
                marginVertical: 30,
              }}
            />
            <View style={style.Box}>
              <Text style={style.boxText}>Terms of Holidays EMI</Text>
              <Text style={[style.boxText, {color: colors.gray1}]}>
                {'1. Pay Advance EMI as per the rule' +
                  '\n' +
                  '2. Pay as per the rule' +
                  '\n' +
                  '3. New activity to be approved'}
              </Text>
            </View>
            <View style={{marginVertical: 30, flexDirection: 'row'}}>
              <View
                style={{
                  height: 18,
                  width: 18,
                  marginRight: 10,
                  backgroundColor: colors.colorWhite,
                }}></View>
              <Text>I agree terms of EMI Holidays and pay</Text>
            </View>
            <View style={style.Box2}>
              <View
                style={[
                  style.Box2,
                  {
                    height: 60,
                    width: 300,
                    borderRadius: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 14,
                  },
                ]}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 15,
                      backgroundColor: colors.snowBlue,
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: 4,
                      color: colors.colorBlack,
                      alignSelf: 'center',
                    }}>
                    Interest Payable
                  </Text>
                </View>
                <Text
                  style={{
                    marginLeft: 4,
                    color: colors.colorBlack,
                    alignSelf: 'center',
                  }}>
                  3600
                </Text>
              </View>
            </View>
            <CommonButton
              BUttonStyle={{
                height: 40,
                marginVertical: 20,
                backgroundColor: colors.colorRed,
              }}
              onPress={() => {}}
              textStyle={''}
              title={'Pay Now'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  HeadLine: {
    color: colors.lightBlack,
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: 'Montserrat-Medium',
    marginTop: 4,
    marginRight: 6,
  },
  answerLine: {
    color: colors.lightBlack,
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'Montserrat-Medium',
    marginTop: 4,
  },
  Box: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.colorWhite,
    shadowColor: colors.blackShade,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  boxText: {
    color: colors.lightBlack,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 10,
  },
  Box2: {
    height: 100,
    borderRadius: 30,
    backgroundColor: colors.colorWhite,
    shadowColor: colors.lightBlack,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
});

export default EmiHolidays;
