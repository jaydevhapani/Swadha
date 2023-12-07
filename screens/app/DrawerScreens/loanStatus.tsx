import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import commanStyles from '../../utilies/commanStyles';
import CommonHeader from '../../components/commonHeader';
import colors from '../../utilies/colors';
import {WIDTH} from '../../utilies/constant';
import navigationService from '../../navigations/navigationService';
import {ScreenName} from '../../navigations/screenName';
import {Post_Api} from '../../apiHelper/apiHelper';
import apiName from '../../apiHelper/apiName';
import {useDispatch} from 'react-redux';

type Props = {
  navigation: any;
  route: any;
};

const footerArray = [
  {
    name: 'Statement',
  },
  {
    name: 'Repayment Schedule',
  },
  {
    name: 'Sanction Letter',
  },
  {
    name: 'Advance EMI',
  },
  {
    name: 'Foreclose Loan',
  },
  {
    name: 'EMI Holidays',
  },
  {
    name: 'Noc Letter',
  },
  {
    name: 'Insurance Policy',
  },
];

const LoanStatus = (props: Props) => {
  const dispatch = useDispatch();
  const [loadnDetails, setLoadnDetails] = useState({
    loanid: '',
    loan_amount: '',
    roi: '',
    outstanding_amount: 0,
    repayment_mode: '',
    overdue: 0,
    start_date: '',
    end_date: '',
    statement: '',
    repayment_schedule: '',
    sanction_letter: '',
    noc_letter: '',
    insurance_policy: '',
  });
  useEffect(() => {
    if (props.route.params.loanid != undefined) {
      fetchLoadnDetails();
    }
  }, [props]);

  //fetchLoadnDetails
  const fetchLoadnDetails = async () => {
    const Object = {
      token: global.accessToken,
      loanid: props.route.params.loanid,
    };
    try {
      await Post_Api(apiName.activeLoanDetails, Object, dispatch)
        .then(json => {
          if (json) {
            if (json) {
              setLoadnDetails(json?.data);
            }
          }
        })
        .catch(error => {});
    } catch (error) {}
  };

  return (
    <SafeAreaView style={commanStyles.Container}>
      <CommonHeader
        isMenu={false}
        isDrawerFlag={''}
        navigation={props.navigation}
      />
      <ScrollView style={commanStyles.Container}>
        <View style={[commanStyles.Container, commanStyles.pH10]}>
          <Text style={style.statusText}>
            {'Account Status as on 08 JUL 2023'}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={[style.Box1, style.contentWidth]}>
              <Text style={style.BoxHeader}>{'Total Loan Amount'}</Text>
              <Text style={style.BoxAnswer}>{loadnDetails.loan_amount}</Text>
            </View>
            <View style={[style.Box1, style.contentWidth]}>
              <Text style={style.BoxHeader}>{'Current Outstanding'}</Text>
              <Text style={style.BoxAnswer}>
                {loadnDetails.outstanding_amount}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View style={[style.Box1, style.contentWidth]}>
              <Text style={style.BoxHeader}>{'Rate of Interest'}</Text>
              <Text style={style.BoxAnswer}>{loadnDetails.roi + '%'}</Text>
            </View>
            <View style={[style.Box1, style.contentWidth]}>
              <Text style={style.BoxHeader}>{'Repayment Mode'}</Text>
              <Text style={style.BoxAnswer}>{loadnDetails.repayment_mode}</Text>
            </View>
          </View>
          <View
            style={[
              style.Box1,
              {
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            ]}>
            <View
              style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={style.BoxHeader}>{'Overdue Amount'}</Text>
              <Text style={style.BoxAnswer}>{loadnDetails.overdue}</Text>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  height: 36,
                  width: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: colors.colorRed,
                  borderRadius: 100,
                }}>
                <Text style={{color: colors.colorWhite}}>Pay Now!</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* {//!Tenure EMI paid calculation is on pending.........} */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View style={[style.Box1, style.contentWidth]}>
              <Text style={style.BoxHeader}>{'Start Date'}</Text>
              <Text
                style={[
                  style.BoxAnswer,
                  {
                    fontSize: 13,
                  },
                ]}>
                {loadnDetails.start_date}
              </Text>
            </View>
            <View style={[style.Box1, style.contentWidth]}>
              <Text style={style.BoxHeader}>{'End Date'}</Text>
              <Text
                style={[
                  style.BoxAnswer,
                  {
                    fontSize: 13,
                  },
                ]}>
                {loadnDetails.end_date}
              </Text>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <FlatList
              data={footerArray}
              numColumns={3}
              columnWrapperStyle={{flexWrap: 'wrap'}}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      height: 36,
                      // width: 100,
                      paddingVertical: 4,
                      paddingHorizontal: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: colors.colorRed,
                      borderRadius: 100,
                      marginRight: 10,
                      marginTop: 10,
                    }}
                    onPress={() => {
                      navigationService.navigate(item.name, {
                        loanid: loadnDetails.loanid,
                      });
                    }}>
                    <Text style={{color: colors.colorWhite}}>{item?.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  statusText: {
    color: colors.lightBlack,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 20,
    marginTop: 20,
  },
  BoxHeader: {
    color: colors.colorGray,
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 1,
  },
  BoxAnswer: {
    color: colors.gray3,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 10,
  },
  Box1: {
    height: 80,
    borderRadius: 10,
    backgroundColor: colors.grey4,
    shadowColor: colors.lightBlack,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWidth: {
    width: WIDTH / 2.2,
  },
});

export default LoanStatus;
