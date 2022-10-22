import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 10,
    borderBottomColor:colors.grey,
    borderBottomWidth:1,
    shadowColor: 'bdbdbd',
    height: 100,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 10.3,
    shadowRadius: 4.5,
    elevation: 1,
  },
  image_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginVertical: 10,
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  quantity_container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  counter_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  counter: {
    backgroundColor: colors.mainColor,
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

  price_container: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginRight: 10,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '700',
  },
  quantity: {
    color: colors.white,
    fontSize: 20,
  },
  price: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '700',
  },
  currency: {
    color: colors.mainColor,
  },
  quantity_text: {
    color: colors.mainColor,
    fontSize: 20,
    textAlign: 'center',
  },
  icon_container: {
    marginTop: 5,
    marginRight: 0,
    justifyContent: 'flex-end',
  },
});
