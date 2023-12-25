import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

type Props = {
    url : string
  };

export default function CommanwebView(url : Props) {
  return (
    <WebView source={{uri: url.url}} style={{flex: 1}} />
  );
}

const styles = StyleSheet.create({});
