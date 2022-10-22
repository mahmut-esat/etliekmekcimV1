import {StyleSheet} from 'react-native';
import { COLORS } from '../../../constants/theme';

export default  StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,
      flexDirection: 'row',
      padding: 5,
      marginVertical: 10,
      borderBottomColor: COLORS.grey,
      borderBottomWidth: 2,
      alignItems: 'center',
    },
    icon: {
      marginRight: 10,
    },
  });