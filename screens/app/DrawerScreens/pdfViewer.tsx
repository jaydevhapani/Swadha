import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';
import CommonHeader from '../../components/commonHeader';

type Props = {
  route: any;
  navigation: any;
};

const PdfViewer = (props: Props) => {
  console.log(props.route.params.pdf);

  return (
    <View style={styles.container}>
      <CommonHeader
        isMenu={false}
        isDrawerFlag={''}
        navigation={props.navigation}
      />
      <Pdf
        trustAllCerts={false}
        source={{uri: props.route.params.pdf}}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

export default PdfViewer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
