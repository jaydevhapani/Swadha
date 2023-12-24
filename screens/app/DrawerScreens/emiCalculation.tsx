import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import commanStyles from '../../utilies/commanStyles';
import CommonHeader from '../../components/commonHeader';
import {useDrawerStatus} from '@react-navigation/drawer';
import Slider from '@react-native-community/slider';
import colors from '../../utilies/colors';
import {WIDTH} from '../../utilies/constant';
import CommonButton from '../../components/commonButton';
import images from '../../assests/images';
import DatePicker from 'react-native-date-picker';
import {RadioGroup} from 'react-native-radio-buttons-group';

type Props = {
  navigation: any;
};

const EmiCalculation = (props: Props) => {
  const [sliderValues, setSliderValues] = useState({
    Amount: 1,
    Tenure: 1,
    InterestRate: 1,
  });
  const [datepickeropen, setDatepicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Reducing',
        value: 'Reducing',
      },
      {
        id: '2',
        label: 'Flat',
        value: 'Flat',
      },
    ],
    [],
  );
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
        <ScrollView>
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
          <TouchableOpacity
            onPress={() => setDatepicker(!datepickeropen)}
            style={[style.Box2]}>
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
                {date.getDate() +
                  '/' +
                  (date.getMonth() + 1) +
                  '/' +
                  date.getFullYear()}
              </Text>
            </View>
            <Image
              source={images.calander}
              style={{
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
          />
          <View style={{marginTop: 40}}>
            <CommonButton
              onPress={() => {}}
              title={'Calculate'}
              BUttonStyle={{height: 50}}
              textStyle={''}
            />
          </View>
        </ScrollView>
      </View>
      <DatePicker
        modal
        open={datepickeropen}
        date={date}
        onConfirm={date => {
          setDatepicker(false);
          setDate(date);
        }}
        onCancel={() => {
          setDatepicker(false);
        }}
        mode="date"
      />
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
  Box2: {
    backgroundColor: colors.colorWhite,
    shadowColor: colors.lightBlack,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    alignItems: 'center',
    borderWidth: 0.5,
    height: 60,
    width: 300,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default EmiCalculation;
