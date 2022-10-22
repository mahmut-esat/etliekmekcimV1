import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants/theme';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingBottom: 100,
    backgroundColor: COLORS.white,
    flex: 1,
    // marginBottom: 120,
  },
  inner_container: {
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: 'flex-start',
  },
  product_container: {
    justifyContent: 'flex-start',
    flex: 1,
  },
  title_container: {
    backgroundColor: COLORS.white,
    marginVertical: 12,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: COLORS.mainColor,
    fontSize: 25,
    fontWeight: 'bold',
  },
  total_container: {
    backgroundColor: COLORS.white,
    marginTop: 5,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderTopColor: '#cb9ca1',
    borderTopWidth: 3,
    paddingTop: 10,
  },
  price: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '700',
  },
  currency: {
    color: COLORS.mainColor,
  },
  total_text: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '700',
  },
  remove_all: {
    color: COLORS.mainColor,
    textAlign: 'right',
    marginRight: 25,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: '700',
  },
  button_container: {
    justifyContent: 'flex-end',
    marginBottom: 0,
    backgroundColor: COLORS.white,
  },
  empity_container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  anime: {
    width: width,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  empity_text: {
    color: COLORS.dark,
    fontSize: 20,
    textAlign: 'center',
  },
  empity_text2: {
    color: COLORS.dark,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 42,
    marginBottom: 10,
  },
});
