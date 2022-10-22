import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import styles from './AdminPage.styles';

export default function AdminPage() {
  const [orderData, setOrderData] = useState({});

  const user = auth().currentUser.uid;

  useEffect(() => {
    const fetchData =  () => {
      let list = [];
      try {
        const querySnapshot = firestore()
          .collection('orders')
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
             console.log(doc.data());
            });
            setOrderData(list);
            console.log('yeni liste:   ' + list);
          });
      } catch (error) {
        console.log(error);
      }
    };
    return () => fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Siparişlerim</Text>
        </View>
        {orderData.items.map(item => (
          <OrdersCard item={item} />
        ))}
        <Text>{orderData.userId}</Text>
      </View>
    </View>
  );
}

const OrdersCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.order_container}>
      <Text style={{color: 'red'}}>{item.title}</Text>
    </TouchableOpacity>
  );
};
