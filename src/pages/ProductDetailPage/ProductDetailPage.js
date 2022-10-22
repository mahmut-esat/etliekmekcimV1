import {Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import styles from './ProductDetailPage.styles';
import AppButton from '../../components/basic/AppButton/AppButton';
import {addToCart} from '../../redux/cart/cartSlice';

export default function ProductDetailPage({route}) {
  const [quantity, setQuantity] = useState(1);
  const {item} = route.params;

  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  console.log(items.length);
  const navigation = useNavigation();

  const handleAddToCartByAmount = () => {
    dispatch(addToCart(item));
    navigation.navigate('HomePage');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>
          <Text>{'\u20BA'}</Text> {item.price}
        </Text>
      </View>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.counter_container}></View>
      <Text style={styles.explaining}>{item.explaining}</Text>
      <AppButton
        title="Sepete Ekle"
        newButtonStyle={styles.button}
        onPress={() => handleAddToCartByAmount()}
      />
    </View>
  );
}
