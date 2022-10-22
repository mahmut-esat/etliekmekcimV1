import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/theme';

export default StyleSheet.create({
  title_container: {
    marginTop: 10,
    backgroundColor: COLORS.white,
    borderBottomColor: 'red',
    borderBottomWidth: 3,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 35,
    fontFamily:"Roboto-Bold",
    color: COLORS.mainColor,
  },
  profile: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  profil_title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.mainColor,
    marginBottom: 10,
  },
  button: {
    marginVertical: 10,
  },
  explainig: {
    color: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contact: {
    fontFamily:"Roboto",
    color: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
  },
  contact_title: {
    color: COLORS.mainColor,
  },
  call_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  anime: {
    justifyContent: 'flex-start',
    height: 125,
    width: 125,
  },
  contact_area: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.mainColor,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 25,
    backgroundColor: COLORS.grey,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 12,
  },
  logo_container:{
    height:120,
    justifyContent:"center",
    alignItems:"center"

  },
  logo:{
    // width:"50%",
    height:100,
    resizeMode:"contain"
  }
});
