import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import commanStyles from '../../utilies/commanStyles';
import CommonHeader from '../../components/commonHeader';
import {useDrawerStatus} from '@react-navigation/drawer';
import CommonButton from '../../components/commonButton';
import colors from '../../utilies/colors';
import images from '../../assests/images';

type Props = {
  navigation: any;
};

const dummyArray = [
  {
    LAN: '48734687932493278',
    OutstandingAmount: 13000,
  },
];

const ForeCloseLoan = (props: Props) => {
  return (
    <SafeAreaView style={commanStyles.Container}>
      <CommonHeader
        isDrawerFlag={''}
        isMenu={false}
        navigation={props.navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        style={[{flex: 1}]}>
        <View style={[commanStyles.Container, commanStyles.pH10]}>
          <Text style={commanStyles.HeaderText}>Forceclose Loan</Text>
          <View style={{marginTop: 40}}>
            <FlatList
              data={dummyArray}
              style={{paddingBottom: 10}}
              renderItem={({item, index}) => {
                return (
                  <View style={style.Box}>
                    <View style={{flex: 1}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={style.HeadLine}>
                          {Object.keys(item)[0]}:
                        </Text>
                        <Text style={style.answerLine}>{item.LAN}</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={style.HeadLine}>
                          {Object.keys(item)[1]}:
                        </Text>
                        <Text style={style.answerLine}>
                          {item.OutstandingAmount}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
              ItemSeparatorComponent={() => <View style={{height: 20}} />}
            />
            <View style={{marginVertical: 20}}>
              <Text style={style.boxText}>Forceclose Date</Text>
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
                    Select date
                  </Text>
                </View>
                <Image
                  source={images.calander}
                  style={{
                    height: 30,
                    width: 30,
                  }}
                />
              </View>
            </View>
            <CommonButton
              BUttonStyle={{
                height: 40,
                width: 190,
                marginVertical: 30,
                backgroundColor: colors.colorRed,
              }}
              textStyle={''}
              title={'Submit Request'}
              onPress={() => {}}
            />
             <View>
              <Text style={[style.boxText, {color : colors.ButtonColor}]}>Thankyou for your message, our team will get back to you soon!</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  Box: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.grey4,
    shadowColor: colors.blackShade,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    flexDirection: 'row',
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
  boxText: {
    color: colors.lightBlack,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 10,
  },
});
export default ForeCloseLoan;
