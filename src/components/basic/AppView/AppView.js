import React from 'react';
import {
  View,
  Platform,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { COLORS } from '../../../constants/theme';

function Card({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

export default Card;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor:COLORS.white
  },
});
