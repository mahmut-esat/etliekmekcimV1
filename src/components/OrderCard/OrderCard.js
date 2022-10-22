import React from 'react';
import {View, Image} from 'react-native';
import AppText from '../basic/AppText/AppText';
import styles from './OrderCard.styles';

export default function OrderCard({item}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.Image} />
      <View style={styles.title_container}>
        <AppText style={styles.title}>{item.title}</AppText>
        <View style={styles.quantity_container}>
          <AppText style={styles.quantity_text}>{item.quantity} adet </AppText>
        </View>
      </View>
    </View>
  );
}
