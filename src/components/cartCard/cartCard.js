import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import styles from './cartCard.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../styles/colors';
import AppText from '../basic/AppText/AppText';

export default function cartCard({
  product,
  onPress,
  onPressIncrease,
  onPressDecrease,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image source={{uri:product.image}} style={styles.image} />
      </View>
      <View style={styles.quantity_container}>
        <AppText style={styles.title} numberOfLines={2}>
          {product.title}
        </AppText>
        <View style={styles.counter_container}>
          <TouchableOpacity
            style={styles.counter}
            activeOpacity={0.5}
            onPress={onPressDecrease}>
            <Text style={styles.quantity}>{'-'}</Text>
          </TouchableOpacity>

          <AppText style={styles.quantity_text}>{product.quantity}</AppText>

          <TouchableOpacity
            style={styles.counter}
            activeOpacity={0.5}
            onPress={onPressIncrease}>
            <Text style={styles.quantity}>{'+'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.price_container}>
        <TouchableOpacity activeOpacity={0.5} style={styles.icon_container}>
          <TouchableOpacity onPress={onPress}>
            <Icon
              name="delete-circle-outline"
              color={colors.mainColor}
              size={36}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <AppText style={styles.price}>
          <AppText style={styles.currency}>{'\u20BA'}</AppText>
          {product.quantity === 1
            ? product.price
            : product.price * product.quantity}
        </AppText>
      </View>
    </View>
  );
}

export const CounterCard = ({counter, onPressIncrease, onPressDecrease, disabled}) => (
  <>
    <TouchableOpacity
      style={styles.counter}
      activeOpacity={0.5}
      onPress={onPressDecrease}
        disabled={disabled}>
      <Text style={styles.quantity}> - </Text>
    </TouchableOpacity>
    <Text style={styles.quantity_text}>{counter}</Text>
    <TouchableOpacity
      style={styles.counter}
      activeOpacity={0.5}
      onPress={onPressIncrease}>
      <Text style={styles.quantity}> + </Text>
    </TouchableOpacity>
  </>
);
