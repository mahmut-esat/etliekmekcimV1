import {StyleSheet} from 'react-native';
import { COLORS } from '../../../constants/theme';

export default StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 10,
    height: 50,
    backgroundColor: COLORS.mainColor,
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
    shadowColor: '#bdbdbd',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 10.3,
    shadowRadius: 4.5,
    elevation: 4,
},
title:{
    color:COLORS.white,
    fontSize:20,
    fontWeight:"700"
}
});
