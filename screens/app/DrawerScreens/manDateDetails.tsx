import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import commanStyles from '../../utilies/commanStyles';
import CommonHeader from '../../components/commonHeader';
import {useDrawerStatus} from '@react-navigation/drawer';
import apiName from '../../apiHelper/apiName';
import {useDispatch} from 'react-redux';
import {Post_Api} from '../../apiHelper/apiHelper';
import {AlertBox} from '../../utilies/constant';
import i18n from '../../utilies/i18n';
import {useIsFocused} from '@react-navigation/native';

type Props = {
  navigation: any;
};

const ManDateDetails = (props: Props) => {
  const dispatch = useDispatch();
  const isFocus = useIsFocused();
  useEffect(() => {
    getManDateDetails();
  }, [isFocus]);

  let ManDateDetailsOBject = {
    UMRN: '',
    account_number: '',
    account_type: '',
    bank_name: '',
    customer_name: '',
    end_date: '',
    ifsc_code: '',
    siamount: '',
    start_date: '',
  };

  const getManDateDetails = async () => {
    const Object = {
      token: global.accessToken,
      cid: global.cid,
    };
    try {
      await Post_Api(apiName.getMandateDetail, Object, dispatch)
        .then(json => {
          if (json) {
            if (json) {
              ManDateDetailsOBject = json.data;
            }
          }
        })
        .catch(error => {});
    } catch (error) {}
  };

  return (
    <SafeAreaView style={commanStyles.Container}>
      <CommonHeader
        isDrawerFlag={useDrawerStatus()}
        isMenu={true}
        navigation={props.navigation}
      />
      <View style={[commanStyles.Container, commanStyles.pH10]}>
        <Text style={commanStyles.HeaderText}>
          SWADHA FINLEASE- Mandate Details
        </Text>
        <View>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ManDateDetails;
