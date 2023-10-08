import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../utilies/colors';

type Props = {
  onPress: any;
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
        justifyContent: 'center',
      }}>
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
          marginRight: 10,
        }}
        onPress={() => props.onPress && props.onPress()}>
        <Text style={{color: colors.colorWhite}}>{'Cancel'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommonAlertBox;
