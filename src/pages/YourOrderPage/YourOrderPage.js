import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import styles from './YourOrderPage.styles';
import Success from '../../assets/animation/Success/Success';
import OrderCard from '../../components/OrderCard/OrderCard';

export default function YourOrderPage(props) {
  const {userIdd} = props.route.params;

  const [lastOrder, setLastOrder] = useState({
    userId: '',
    items: [],
  });

  const user = auth().currentUser.uid;

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot(snapshot => {
        snapshot.docs.map(doc => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        <View style={styles.success_container}>
          <Success />
        </View>
        <View style={styles.title_container}>
          <Text style={styles.title}>Sipariş Detayı</Text>
        </View>
      </View>
      {lastOrder.userId === userIdd ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {lastOrder.items.map((food, index) => (
            <View key={index}>
              <View>
                <OrderCard item={food} />
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <></>
      )}
    </View>
  );
}
