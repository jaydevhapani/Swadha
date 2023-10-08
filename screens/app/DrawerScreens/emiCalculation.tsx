import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import commanStyles from '../../utilies/commanStyles';
import CommonHeader from '../../components/commonHeader';
import {useDrawerStatus} from '@react-navigation/drawer';
import Slider from '@react-native-community/slider';
import colors from '../../utilies/colors';
import {WIDTH} from '../../utilies/constant';
import CommonButton from '../../components/commonButton';

type Props = {
  navigation: any;
};

const EmiCalculation = (props: Props) => {
  const [sliderValues, setSliderValues] = useState({
    Amount: 1,
    Tenure: 1,
    InterestRate: 1,
  });

  return (
    <SafeAreaView style={commanStyles.Container}>
      <CommonHeader
        isDrawerFlag={useDrawerStatus()}
        isMenu={true}
        navigation={props.navigation}
      />
      <View style={[commanStyles.Container, commanStyles.pH10]}>
        <View>
          <Text style={commanStyles.HeaderText}>{'EMI Calculator'}</Text>
        </View>
        <View style={[style.box, commanStyles.M10]}>
          <View style={style.AmountView}>
            <Text style={style.AmountText}>{'Loan Amount'}</Text>
            <Text style={style.AmountText}>
              {sliderValues.Amount.toFixed()} Lacs
            </Text>
          </View>

          <Slider
            style={{width: 330}}
            minimumValue={1}
            maximumValue={10}
            minimumTrackTintColor={colors.green1}
            maximumTrackTintColor="#000000"
            onValueChange={(t: any) => {
              setSliderValues(prev => ({...prev, Amount: t}));
            }}
          />
        </View>
        <View style={[style.box, commanStyles.M10]}>
          <View style={style.AmountView}>
            <Text style={style.AmountText}>{'Tenure'}</Text>
            <Text style={style.AmountText}>
              {sliderValues.Tenure.toFixed()} Years
            </Text>
          </View>

          <Slider
            style={{width: 330}}
            minimumValue={1}
            maximumValue={8}
            minimumTrackTintColor={colors.green1}
            maximumTrackTintColor="#000000"
            onValueChange={(t: any) => {
              setSliderValues(prev => ({...prev, Tenure: t}));
            }}
          />
        </View>
        <View style={[style.box, commanStyles.M10]}>
          <View style={style.AmountView}>
            <Text style={style.AmountText}>{'Interest Rate'}</Text>
            <Text style={style.AmountText}>
              {sliderValues.InterestRate.toFixed()} %
            </Text>
          </View>

          <Slider
            style={{width: 330}}
            minimumValue={1}
            maximumValue={10}
            minimumTrackTintColor={colors.green1}
            maximumTrackTintColor="#000000"
            onValueChange={(t: any) => {
              setSliderValues(prev => ({...prev, InterestRate: t}));
            }}
          />
        </View>
        <View style={{marginTop: 40}}>
          <CommonButton
            onPress={() => {}}
            title={'Calculate'}
            BUttonStyle={{height: 50}}
            textStyle={''}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  box: {
    height: 100,
    backgroundColor: colors.colorWhite,
    borderRadius: 10,
    shadowColor: colors.lightBlack,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AmountText: {
    fontSize: 16,
    color: colors.gray3,
    fontWeight: '600',
  },
  AmountView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
});

export default EmiCalculation;
