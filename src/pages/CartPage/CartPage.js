import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore, {firebase} from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

import CartCard from '../../components/cartCard/cartCard';
import styles from './CartPage.styles';
import AppButton from '../../components/basic/AppButton/AppButton';

import {
  removeAllCart,
  removeFromCart,
  increase,
  decrease,
} from '../../redux/cart/cartSlice';
import ShoppingBag from '../../assets/animation/ShoppingBag/ShoppingBag';
import {showMessage} from 'react-native-flash-message';

export default function CartPage() {
  const items = useSelector(state => state.cart.items);
  const {total} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [userSession, setUserSession] = useState();

  const user = auth().currentUser;
  const userIdd = auth().currentUser?.uid;

  console.log('aaa    ' + userIdd);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const handleAddToOrder = () => {
    if (!userSession) {
      showMessage({
        message:
          'Siparişinizi tamamlayabilmek için lütfen üye girişi yapınız..',
        type: 'danger',
      });
      return;
    }
    if (userSession) {
      firestore()
        .collection('orders')
        .add({
          items: items,
          userId: user?.uid,
          email: user?.email,
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        });
      dispatch(removeAllCart());
      navigation.navigate('YourOrderPage', {userIdd});
    }
  };

  return (
    <View style={styles.container}>
      {items.length === 0 ? (
        <View style={styles.empity_container}>
          <View style={styles.anime}>
            <ShoppingBag />
          </View>
          <Text style={styles.empity_text}>
            Sepetinizde henüz lezzetli birşeyler yok!
          </Text>
          <Text style={styles.empity_text2}>
            Lezzetlerimizi keşfetmek ister misiniz?
          </Text>
          <AppButton
            title="Anasayfaya git"
            onPress={() => navigation.navigate('HomePage')}
            disabled={true}
          />
        </View>
      ) : (
        <View style={styles.inner_container}>
          <View style={styles.title_container}>
            <Text style={styles.title}>Sepetim</Text>
          </View>
          {items.length > 0 ? (
            <TouchableOpacity onPress={() => dispatch(removeAllCart())}>
              <Text style={styles.remove_all}>Sepeti Boşalt</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
          <View style={styles.product_container}>
            <ScrollView>
              {items.map((item, index) => (
                <CartCard
                  key={index}
                  product={item}
                  ownPrice={item.price}
                  onPress={() => dispatch(removeFromCart(item.id))}
                  onPressIncrease={() => dispatch(increase(item))}
                  onPressDecrease={() => {
                    if (item.quantity === 1) {
                      dispatch(removeFromCart(item.id));
                      return;
                    }
                    dispatch(decrease(item));
                  }}
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.button_container}>
            <View style={styles.total_container}>
              <Text style={styles.total_text}>Toplam: </Text>
              <Text style={styles.price}>
                <Text style={styles.currency}>{'\u20BA '}</Text>
                {total}
              </Text>
            </View>
            <View>
              <AppButton
                title="Siparişi Tamamla"
                onPress={() => handleAddToOrder()}
                disabled={true}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
