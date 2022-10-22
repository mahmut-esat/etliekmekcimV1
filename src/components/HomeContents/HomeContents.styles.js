import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title_container: {
    marginTop: 10,
    shadowRadius: 3.8,
    shadowOpacity: 0.05,
    marginHorizontal: 3,
  },
  title_text: {
    color: COLORS.mainColor,
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 20,
  },
  card_container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 5,
    
  },
});
