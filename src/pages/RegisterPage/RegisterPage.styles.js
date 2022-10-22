import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/theme';

export default StyleSheet.create({
  input_container: {
    alignItems: 'center',
  },
  out_container: {},
  title_container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight:"700",
    color:COLORS.mainColor
  },
  image: {
    width: 100,
    height: 100,
  },
  button_container: {
    marginVertical: 15,
    paddingBottom:10
  },
  inner_button_container: {
    marginBottom:20,
    fontSize: 15,
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 0,
  },
  signUp2: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  signUp1: {
    fontSize: 17,
  },
});
