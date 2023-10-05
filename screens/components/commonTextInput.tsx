import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import colors from '../utilies/colors';

type Props = {
  title: any;
  onChange: any;
  placeHolder: any;
  inputViewStye: any;
  textInputStyle: any;
  maxLength: any;
  keyboardType : any;
};

const CommonTextInput = (props: Props) => {
  return (
    <View>
      <Text style={style.title}>{props.title}</Text>
      <View style={[style.viewBox, props.inputViewStye]}>
        <TextInput
          style={[style.inputBox, props.textInputStyle]}
          placeholder={props.placeHolder}
          maxLength={props.maxLength}
          keyboardType={props.keyboardType}
          onChange={t => props.onChange && props.onChange(t?.nativeEvent?.text)}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  viewBox: {
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
  },
  inputBox: {
    height: 60,
    width: '100%',
    paddingHorizontal: 10,
    color: colors.colorBlack,
    fontSize : 20,
    fontWeight : '600'
  },
  title : {
    fontSize : 16,
    color : colors.colorBlack,
    fontWeight : '700',
    marginTop : 6,
    marginBottom : 6,
  }
});

export default CommonTextInput;
