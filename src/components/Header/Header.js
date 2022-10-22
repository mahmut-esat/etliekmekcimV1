import React from 'react';
import {Image, View} from 'react-native';
import styles from './Header.styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/image/Logo.jpg')}
        style={styles.image}
      />
    </View>
  );
}
