import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  success_container: {
    justifyContent: 'center',
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title_container: {
    justifyContent: 'center',
    marginBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: COLORS.mainColor,
    fontWeight: '700',
  },
});
