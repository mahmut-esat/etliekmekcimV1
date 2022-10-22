import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

export default StyleSheet.create({
  input_container: {
    alignItems: 'center',
  },
  title_container: {
    marginTop:20,
    marginBottom:10,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height:100,
    resizeMode: 'contain',
    marginBottom:30
  },
  title: {
    fontSize: 42,
    color: COLORS.mainColor,
    fontWeight:"500"
  },
  button_container: {
    marginTop: 25,
  },
  button_forgot_container: {
    marginBottom: 50,
  },
  forgot_button: {
    color: COLORS.white,
  },
  inner_button_container: {
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
