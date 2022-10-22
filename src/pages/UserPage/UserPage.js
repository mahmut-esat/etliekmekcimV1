import React from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './UserPage.styles';
import AppButton from '../../components/basic/AppButton/AppButton';

export default function UserPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          source={require('../../assets/image/Logo.jpg')}
          style={styles.image}
        />
      </View>
      <AppButton
        title="Kayıt Ol"
        onPress={() => navigation.navigate('RegisterPage')}></AppButton>
      <AppButton
        title="Giriş Yap"
        onPress={() => navigation.navigate('LoginPage')}></AppButton>
    </View>
  );
}
