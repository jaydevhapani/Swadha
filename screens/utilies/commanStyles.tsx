import {StyleSheet} from 'react-native';
import {HEIGHT, WIDTH} from './constant';
import colors from './colors';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
  M10: {
    marginTop: 10,
  },
  p30: {
    paddingBottom: 30,
  },
  pH14: {
    paddingHorizontal: 14,
  },
});
