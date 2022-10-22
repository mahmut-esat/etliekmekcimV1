import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { COLORS } from '../../../constants/theme';

function AppText({children, style, ...otherProps}) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: COLORS.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Ruboto' : 'Avenir',
  },
});
