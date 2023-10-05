import {View, Text, Image} from 'react-native';
import React from 'react';
import images from '../assests/images';

type Props = {};

const CommonFooterLogo = (props: Props) => {
  return (
    <View>
      <Image
        source={images.SwadhaLogo}
        resizeMode="cover"
        style={{
          height: 34,
          width: 110,
          marginBottom: 20,
          alignSelf: 'flex-start',
        }}
      />
    </View>
  );
};

export default CommonFooterLogo;
