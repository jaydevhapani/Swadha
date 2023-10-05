import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import commanStyles from '../../utilies/commanStyles';
import images from '../../assests/images';
import CommonFooterLogo from '../../components/commonFooterLogo';
import CommonSwadhaText from '../../components/commonSwadhaText';
import colors from '../../utilies/colors';
import i18n from '../../utilies/i18n';
import CommonTextInput from '../../components/commonTextInput';
import {HEIGHT} from '../../utilies/constant';
import CommonButton from '../../components/commonButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';

type Props = {};

const Login = (props: Props) => {
  //STATE
  const [isOtpRecived, setIsOtpRecived] = useState(Boolean);

  return (
    <SafeAreaView style={[commanStyles.Container, commanStyles.pH14]}>
      <ScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <Image
          source={images.LoginTop}
          resizeMode="contain"
          style={{
            height: 200,
            alignSelf: 'center',
          }}
        />
        <View>
          <CommonSwadhaText color={colors.DarkBlue} />
          <Text style={style.headerText}>{i18n.needLocation}</Text>
          <View style={style.textInputBox}>
            {!isOtpRecived && (
              <CommonTextInput
                title={i18n.loginBoxTitle}
                placeHolder={''}
                onChange={(t: any) => {}}
                inputViewStye={''}
                textInputStyle={''}
                maxLength={10}
                keyboardType={'number-pad'}
              />
            )}
            {isOtpRecived && (
              <OTPInputView
                style={{height: 100, alignSelf: 'center'}}
                pinCount={4}
                autoFocusOnLoad
                codeInputFieldStyle={style.underlineStyleBase}
                codeInputHighlightStyle={style.underlineStyleHighLighted}
                onCodeFilled={code => {
                  console.log(`Code is ${code}, you are good to go!`);
                }}
              />
            )}
          </View>
          <View style={{marginTop: 50}}>
            <CommonButton
              onPress={() => {
                setIsOtpRecived(!isOtpRecived);
              }}
              title={isOtpRecived ? i18n.Conform : i18n.SendOtp}
              BUttonStyle={''}
              textStyle={''}
            />
          </View>
        </View>
      </ScrollView>

      <CommonFooterLogo />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  headerText: {
    color: colors.LowBlue,
    fontSize: 20,
    alignSelf: 'center',
    letterSpacing: 0.4,
  },
  textInputBox: {
    alignSelf: 'center',
    width: 300,
    marginTop: HEIGHT / 12,
  },
  underlineStyleBase: {
    width: 60,
    height: 60,
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: colors.ButtonColor,
    color : colors.colorBlack,
    fontSize : 18,
    fontWeight : '700'
  },

  underlineStyleHighLighted: {
    borderColor: colors.DarkBlue,
  },
});

export default Login;
