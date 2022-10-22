import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  inner_scroll_container: {
    paddingBottom: 80,
  },

  logout_container: {
    top: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  inner_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.white,
  },
  text_container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.mainColor,
    borderRadius: 15,
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: Dimensions.get('window').width * 0.85,
    backgroundColor: COLORS.grey,
    alignItems: 'center',
  },

  title: {
    color: COLORS.mainColor,
    fontSize: 18,
    fontWeight: '700',
  },

  info: {
    color: COLORS.dark,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 30,
    paddingLeft: 30,
  },
  button_container: {
    flex: 1,
    marginTop: 25,
  },
  admin_container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    flexDirection: 'row',
  },
  admin_text: {
    color: 'red',
    fontSize: 20,
    paddingLeft: 10,
  },
});
