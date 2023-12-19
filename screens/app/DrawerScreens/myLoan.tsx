import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import commanStyles from '../../utilies/commanStyles';
import CommonHeader from '../../components/commonHeader';
import {useDrawerStatus} from '@react-navigation/drawer';
import i18n from '../../utilies/i18n';
import colors from '../../utilies/colors';
import images from '../../assests/images';
import navigationService from '../../navigations/navigationService';
import {ScreenName} from '../../navigations/screenName';
import {Post_Api} from '../../apiHelper/apiHelper';
import apiName from '../../apiHelper/apiName';
import {useDispatch} from 'react-redux';
import {userProfileData} from '../../reduxConfig/slices/commanSlice';


type Props = {
  navigation: any;
};

const MyLoan = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchActiveLoan();
  }, []);

  //State
  const [loanData, setLoanData] = useState({
    active : [],
    closed : [],
  });

  //fetchActiveLoan
  const fetchActiveLoan = async () => {
    const Object = {
      token: global.accessToken,
      cid: global.cid,
    };
    try {
      await Post_Api(apiName.myLoans, Object, dispatch)
        .then(json => {
          if (json) {
            handleArray(json?.data?.active , 'active');
            handleArray(json?.data?.closed , 'closed');
          }
        })
        .catch(error => {});
    } catch (error) {}
  };

  const handleArray = (data : any , key : string) => {
    setLoanData(prevdata => ({...prevdata , [key] : data}));
  }

  return (
    <SafeAreaView style={[commanStyles.Container]}>
      <CommonHeader
        isMenu
        isDrawerFlag={useDrawerStatus()}
        navigation={props?.navigation}
      />
      <Text style={commanStyles.HeaderText}>{i18n.MyLoan}</Text>
      {/* Active Loans */}
      <View style={{height: 30}} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={commanStyles.pH10}>
        {loanData.active && loanData.active.length != 0 && (
          <>
            <Text style={style.boxText}>{i18n.ActiveLoan}</Text>
            <FlatList
              data={loanData.active}
              renderItem={({item, index}) => (
                <RenderItem item={item} index={index} />
              )}
              ItemSeparatorComponent={() => <View style={{height: 20}} />}
            />
          </>
        )}
        {/* Closed Loans */}
        <View style={{height: 30}} />
        {loanData.closed && loanData.closed.length != 0 && (
          <>
            <Text style={style.boxText}>{i18n.ClosedLoan}</Text>
            <FlatList
              data={loanData.closed}
              renderItem={({item, index}) => (
                <RenderItem item={item} index={index} />
              )}
              ItemSeparatorComponent={() => <View style={{height: 20}} />}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const RenderItem = React.memo(({item}: any, index: any) => {
  return (
    <TouchableOpacity key={index} style={[style.ItemBox]} disabled>
      <View style={{flex: 6}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={style.HeadLine}>{'LAN'}:</Text>
          <Text style={style.answerLine}>{item['loan_ac_no']}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={style.HeadLine}>{'LoanAmount'}:</Text>
          <Text style={style.answerLine}>{item['loan_amount']}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={style.HeadLine}>{'EMIAmount'}:</Text>
          <Text style={style.answerLine}>{item['emi_amount']}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={style.HeadLine}>{'EMIDate'}:</Text>
          <Text style={style.answerLine}>{item['emi_date']}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={style.HeadLine}>{'Overdue'}:</Text>
          <Text style={style.answerLine}>{item['overdue']}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

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
export default MyLoan;
