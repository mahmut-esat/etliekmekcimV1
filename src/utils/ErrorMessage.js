import React from 'react';
import {StyleSheet, Text} from 'react-native';
import AppText from '../components/basic/AppText/AppText';
import { colors } from '../styles/colors';


function ErrorMessage({error, visible}) {
  if (!visible || !error) {
    return null;
  }
  return <AppText style={styles.text}>{error}</AppText>;
}

export default ErrorMessage;

const styles = StyleSheet.create({
  text: {
    color: colors.mainColor,
    fontSize:16
  },
});