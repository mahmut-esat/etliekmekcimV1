import React, {useState} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import styles from './ProductCard.styles';
import {useNavigation} from '@react-navigation/native';
import AppText from '../basic/AppText/AppText';

export default function ProductCard({item}) {
  const navigation = useNavigation();

  const handleProductSelect = item => {
    navigation.navigate('DetailPage', {item});
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => handleProductSelect(item)}>
      <Image source={{uri: item.image}} style={styles.Image} />
      <View style={styles.title_container}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.price}>
          <AppText>{'\u20BA'}</AppText> {item.price}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}
