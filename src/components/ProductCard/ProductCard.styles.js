import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants/theme';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
    paddingVertical: 5,
    width: width * 0.28,
    height: 160,
    borderColor: '#eceff1',
    borderWidth: 2,
    borderRadius: 15,
    shadowColor: '#bdbdbd',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 10.3,
    shadowRadius: 4.5,
    elevation: 5,
  },

  Image: {
    width: width * 0.25,
    height: 80,
    resizeMode: 'contain',
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  title_container: {
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    flex: 1,
    marginVertical: 1,
    height: 40,
  },
  title: {
    color: COLORS.black,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 16,
  },
  price: {
    color: COLORS.mainColor,
    fontWeight: '700',
    fontSize: 16,
  },
});
