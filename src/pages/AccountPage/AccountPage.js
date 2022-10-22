import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import styles from './AccountPage.styles';
import AppButton from '../../components/basic/AppButton/AppButton';
import { COLORS } from '../../constants/theme';

export default function AccountPage() {
  const navigation = useNavigation();

  const [userName, setUserName] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const user = auth().currentUser;

  const handleUserDelete = () => {
    user
      .delete()
      .then(() => {
        // User deleted.
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  firestore()
    .collection('users')
    .doc(user.uid)
    .onSnapshot(doc => {
      const data = doc.data();
      setUserName(data.username);
      setUserAddress(data.address);
      setUserPhone(data.phone_number);
      setIsAdmin(data.isAdmin);
    });

  const handleLogOut = () => {
    auth().signOut();
    navigation.navigate('UserPage');
  };

  if (
    firestore()
      .collection('users')
      .doc(user.uid)
      .onSnapshot(doc => {
        const data = doc.data();
      })
  ) {
  }

  return (
    <ScrollView style={styles.container}>
      <ScrollView style={styles.inner_scroll_container}>
      {isAdmin ? (
        <TouchableOpacity 
        style={styles.admin_container}
        onPress={()=>navigation.navigate("AdminPage")}
        >
          <Icon name="account-key" size={42} color={COLORS.mainColor} />
          <Text style={styles.admin_text}> Admin girişi</Text>
        </TouchableOpacity>
      ) : (
        <></>
        )}
      <View style={styles.logout_container}>
        <Icon
          name="logout"
          color="red"
          size={42}
          style={{width: 80, height: 80}}
          onPress={() => auth().signOut()}
          />
        <Text style={{color: 'red', fontSize: 20}}>Çıkış</Text>
      </View>

      <View style={styles.inner_container}>
        <Text style={styles.title}>Hoşgeldiniz</Text>
        <View style={styles.text_container}>
          <Text style={styles.title}>
            {'Ad Soyad: '}
            <Text style={styles.info}>{userName}</Text>
          </Text>
        </View>
        <View style={styles.text_container}>
          <Text style={styles.title}>
            {'Telefon Numarası: '}
            <Text style={styles.info}>{userPhone}</Text>
          </Text>
        </View>
        <View style={styles.text_container}>
          <Text style={styles.title}>
            {'Adres: '}
            <Text style={styles.info}>{userAddress}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.button_container}>
        {/* <AppButton
          title="Siparişlerim"
          onPress={() => navigation.navigate('AccountEditPage')}
        /> */}
        <AppButton
          title="Bilgileri Güncelle"
          onPress={() => navigation.navigate('AccountEditPage')}
        />
        <AppButton title="Üyeliği Sil" onPress={handleUserDelete} />
      </View>
          </ScrollView>
    </ScrollView>
  );
}
