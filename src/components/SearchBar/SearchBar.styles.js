import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:10
  },
  inner_container: {
    height: 50,
    width: '95 %',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    color: "black",
    flex: 1, // inputun herhangi bir yerine tıklayınca inputun içine girmesi için
  },
});
