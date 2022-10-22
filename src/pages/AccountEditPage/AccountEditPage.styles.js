import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:15,
  },
  title: {
    color: COLORS.mainColor,
    fontSize: 24,
    fontWeight: 'bold',
  },
  inner_container: {
    marginTop: 50,
  },
  input_title: {
    fontSize: 20,
    color: COLORS.mainColor,
    fontWeight: '700',
  },
  input_container:{
    marginVertical:10,
    flex:1
  },
  button_container:{
    marginTop:30,
  }
});
