import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../constants/theme';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:"row",
    paddingHorizontal: 2,
    paddingVertical: 5,
    width: width * 0.80,
    borderColor: COLORS.grey,
    borderWidth: 2,
    borderRadius: 15,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 10.3,
    shadowRadius: 4.5,
    elevation: 2,
  },

  Image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15
  },
  title_container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:"row",
    flex: 1,
    marginVertical: 3,
    marginHorizontal: 13,
    height:40
  },
  title: {
    color: 'black',
    fontWeight: '700',
    fontSize:18
  },
  quantity_container:{
    backgroundColor:COLORS.darkgrey,
    padding:10,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10
  },
  quantity_text:{
    color: 'white',
    fontWeight: '700',
    fontSize:16
  }
});
