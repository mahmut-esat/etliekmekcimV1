import React from 'react';
import {View, TouchableWithoutFeedback, ScrollView, Image} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import AppView from '../../components/basic/AppView/AppView';
import AppInput from '../../components/basic/AppInput/AppInput';
import AppText from '../../components/basic/AppText/AppText';
import AppButton from '../../components/basic/AppButton/AppButton';
import authErrorMessageParser from '../../utils/authErrorMessageParser';
import styles from './LoginPage.styles';
import {COLORS} from '../../constants/theme';

function LoginPage({navigation}) {
  const initialFormValues = {
    email: '',
    password: '',
  };

  const handleLogin = async formValues => {
    if (!formValues.email && !formValues.password) {
      console.log('boşlukları doldurunuz');
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      showMessage({
        message: 'Hoşgeldiniz',
        type: 'success',
      });
      navigation.navigate('HomePage');
    } catch (error) {
      console.log(error.code);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    }
  };

  return (
    <AppView>
      <ScrollView>
        <View style={styles.title_container}>
          <Image
            source={require('../../assets/image/Logo.jpg')}
            style={styles.image}
          />
          <AppText style={styles.title}>Hoşgeldiniz</AppText>
        </View>

        <Formik initialValues={initialFormValues} onSubmit={handleLogin}>
          {({handleChange, handleSubmit, values}) => (
            <>
              <View style={styles.input_container}>
                <AppInput
                  icon="account"
                  width="75%"
                  placeholder="E-posta adresinizi giriniz.."
                  value={values.email}
                  onChangeText={handleChange('email')}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
                <AppInput
                  icon="lock"
                  width="75%"
                  placeholder="Parolanızı giriniz.."
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry
                />
              </View>
              <View style={styles.button_container}>
                <AppButton title="Giriş Yap" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
        <View style={styles.button_forgot_container}>
          <AppButton
            title="Şifremi unuttum"
            newButtonStyle={{backgroundColor: COLORS.white, color: 'red'}}
            newTextStyle={{color: COLORS.mainColor}}
          />
        </View>
        <View style={styles.inner_button_container}>
          <AppText style={styles.signUp1}> Hesabınız yok mu?</AppText>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('RegisterPage')}>
            <AppText style={styles.signUp2}> Kaydolun </AppText>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </AppView>
  );
}

export default LoginPage;
