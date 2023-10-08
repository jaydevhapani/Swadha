import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import commanStyles from '../../utilies/commanStyles';
import CommonHeader from '../../components/commonHeader';
import {useDrawerStatus} from '@react-navigation/drawer';

type Props = {
  navigation: any;
};

const ManDateDetails = (props: Props) => {
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
      </View>
    </SafeAreaView>
  );
};

export default ManDateDetails;
