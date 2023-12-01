import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH} from '../utilies/constant';
import {useSelector} from 'react-redux';

export default function commonLoader() {
  const Loader = useSelector(state => state);
  console.log('LOADER ::: ', Loader);

  return (
    <View
      style={{
        height: HEIGHT,
        width: WIDTH,
        position: 'absolute',
        zIndex: 99999,
        backgroundColor: 'pink',
      }}></View>
  );
}
