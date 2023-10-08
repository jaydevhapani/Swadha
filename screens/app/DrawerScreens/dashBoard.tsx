import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import commanStyles from '../../utilies/commanStyles';
import CommonHeader from '../../components/commonHeader';
import {useDrawerStatus} from '@react-navigation/drawer';
import i18n from '../../utilies/i18n';
import colors from '../../utilies/colors';
import images from '../../assests/images';
import navigationService from '../../navigations/navigationService';
import { ScreenName } from '../../navigations/screenName';

const dummyArray = [
  {
    LAN: '48734687932493278',
    LoanAmount: '20000',
    EMIAmount: '29873',
    EMIDate: '07th of every month',
    Overdue: '10000',
  },
  {
    LAN: '48734687932493278',
    LoanAmount: '20000',
    EMIAmount: '29873',
    EMIDate: '07th of every month',
    Overdue: '10000',
  },
];

type Props = {
  navigation: any;
};

const DashBoard = (props: Props) => {
  return (
    <SafeAreaView style={[commanStyles.Container]}>
      <CommonHeader
        isMenu
        isDrawerFlag={useDrawerStatus()}
        navigation={props?.navigation}
      />
      <View style={[commanStyles.Container, commanStyles.pH10]}>
        <Text style={commanStyles.HeaderText}>{i18n.Dashboard}</Text>
        {/* Active Loans */}
        <View style={{height: 30}} />
        <FlatList
          data={dummyArray}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={style.ItemBox}
              onPress={() => {
                navigationService.navigate(ScreenName.LoanStatus, '')
              }}
              >
                <View style={{flex: 6}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={style.HeadLine}>{Object.keys(item)[0]}:</Text>
                    <Text style={style.answerLine}>{item.LAN}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={style.HeadLine}>{Object.keys(item)[1]}:</Text>
                    <Text style={style.answerLine}>{item.LoanAmount}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={style.HeadLine}>{Object.keys(item)[2]}:</Text>
                    <Text style={style.answerLine}>{item.EMIAmount}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={style.HeadLine}>{Object.keys(item)[3]}:</Text>
                    <Text style={style.answerLine}>{item.EMIDate}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={style.HeadLine}>{Object.keys(item)[4]}:</Text>
                    <Text style={style.answerLine}>{item.Overdue}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={images.arrow}
                    style={{
                      height: 26,
                      width: 26,
                      transform: [{rotate: '180deg'}],
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
          ListHeaderComponent={() => (
            <Text style={style.boxText}>{i18n.ActiveLoan}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  ItemBox: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.grey4,
    shadowColor: colors.lightBlack,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    flexDirection: 'row',
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
export default DashBoard;
