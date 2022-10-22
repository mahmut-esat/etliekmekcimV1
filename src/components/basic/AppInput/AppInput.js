import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../constants/theme';
import styles from './AppInput.styles';

export default function AppInput({
  icon,
  width = '100%',
  newStyle,
  ...otherProps
}) {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <Icon name={icon} size={20} color={COLORS.dark} style={styles.icon} />
      )}
      <TextInput
        placeholderTextColor={COLORS.darkgrey}
        {...otherProps}
        style={[
          {
            color: COLORS.dark,
            fontSize: Platform.OS === 'android' ? 18 : 20,
            fontFamily: Platform.OS === 'android' ? 'Ruboto' : 'Avenir',
            newStyle,
          },
          newStyle,
        ]}
      />
    </View>
  );
}
