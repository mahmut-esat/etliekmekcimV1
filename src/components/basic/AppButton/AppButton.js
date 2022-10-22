import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './AppButton.styles';

export default function AppButton({
  title,
  onPress,
  newButtonStyle,
  newTextStyle,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, newButtonStyle]}
      activeOpacity={0.5}>
      <Text style={[styles.title, newTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
