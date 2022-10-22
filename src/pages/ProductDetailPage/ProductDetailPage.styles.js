import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../constants/theme';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 90,
    height:"50%",
    
    
  },
  title: {
    fontSize: 28,
    color: COLORS.black,
    fontWeight: '700',
    marginVertical: 10,
  },
  price: {
    color: COLORS.mainColor,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  image: {
    width: width * 0.8,
    height: width * 0.6,
    resizeMode: "contain",
    borderRadius: 15,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  counter: {
    backgroundColor: COLORS.mainColor,
    margin: 5,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 5,
    marginHorizontal: 15,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 10.3,
    shadowRadius: 4.5,
    elevation: 4,
  },
  quantity_text: {
    color: COLORS.mainColor,
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    width: width * 0.8,
  },
  explaining: {
    color: 'black', 
    fontSize: 18,
    fontWeight:"500"
  },
});
