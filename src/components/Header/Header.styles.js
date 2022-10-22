import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants/theme';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: width * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginVertical: 1,
    marginHorizontal: 10,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 1,
  },

  image: {
    width: width * 0.5,
    resizeMode: 'contain',
  },
});
