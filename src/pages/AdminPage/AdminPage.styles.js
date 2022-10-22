import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
  },
  order_container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 30,
    backgroundColor: COLORS.grey,
    marginVertical: 10,
  },
});
