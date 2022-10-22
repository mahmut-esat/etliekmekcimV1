import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './SearchBar.styles';
import {colors} from '../../styles/colors';

export default function SearchBar({onSearch}) {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Icon name="search" color={colors.mainColor} size={25} />
        <TextInput
          style={styles.input}
          placeholder="Lezzet ara.."
          placeholderTextColor={'#8d8d8d'}
          onChangeText={onSearch}
          autoFocus={true}
        />
      </View>
    </View>
  );
}
