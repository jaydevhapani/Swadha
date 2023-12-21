import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import colors from '../utilies/colors';

type Props = {
  onPress: any;
  discription?: any;
  logo?: any;
};

const CommonAlertBox = (props: Props) => {
  return (
    <View
      style={{
        height: 360,
        width: 370,
        borderRadius: 10,
        shadowColor: colors.lightBlack,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
        alignSelf: 'center',
        backgroundColor: colors.snowBlue,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      {props.logo && (
        <View>
          <Image source={props.logo} style={{height: 90, width: 90}} />
        </View>
      )}
      {props.discription && (
        <View>
          <Text
            style={{
              fontSize: 18,
              letterSpacing: 0.5,
              alignSelf: 'center',
              textAlign: 'center',
              color: colors.colorGray,
              fontWeight: '600',
            }}>
            {props.discription}
          </Text>
        </View>
      )}
      <TouchableOpacity
        style={{
          height: 36,
          width: 100,
          paddingVertical: 4,
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.colorRed,
          borderRadius: 100,
        }}
        onPress={() => props.onPress && props.onPress()}>
        <Text style={{color: colors.colorWhite}}>{'Cancel'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommonAlertBox;
