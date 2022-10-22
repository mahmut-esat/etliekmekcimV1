import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
  },
  image_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:50,
    top:-20
  },
  image: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
});
