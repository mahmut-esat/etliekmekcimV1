import React from 'react';
import {View, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import * as Yup from 'yup';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';

import AppView from '../../components/basic/AppView/AppView';
import AppInput from '../../components/basic/AppInput/AppInput';
import AppText from '../../components/basic/AppText/AppText';
import AppButton from '../../components/basic/AppButton/AppButton';
import ErrorMessage from '../../utils/ErrorMessage';
import authErrorMessageParser from '../../utils/authErrorMessageParser';
import styles from './RegisterPage.styles';

function RegisterPage() {
  const navigation = useNavigation();

  const initialFormValues = {
    username: '',
    email: '',
    phone_number: '',
    address: '',
    password: '',
    repassword: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Lütfen bu alanı doldurunuz!')
      .label('Username'),
    email: Yup.string()
      .required('Lütfen bu alanı doldurunuz!')
      .email('Lütfen geçerli bir email adresi giriniz.')
      .label('Email'),
    phone_number: Yup.number()
      .required('Lütfen bu alanı doldurunuz!')
      .label('PhoneNumber'),
    address: Yup.string()
      .required('Lütfen bu alanı doldurunuz!')
      .label('Address'),
    password: Yup.string()
      .required('Lütfen bu alanı doldurunuz!')
      .min(6, ({min}) => 'Şifre en az ' + min + ' karakter olmalıdır.')
      .label('Password'),
    repassword: Yup.string()
      .required('Lütfen bu alanı doldurunuz!')
      .min(6, ({min}) => 'Şifre en az ' + min + ' karakter olmalıdır.')
      .label('Repassword'),
  });

  const handleFormSubmit = async formValues => {
    if (
      !formValues.username &&
      !formValues.email &&
      !formValues.password &&
      !formValues.address &&
      !formValues.phone_number
    ) {
      console.log('boş alanları giriniz');
      return;
    }

    if (formValues.password !== formValues.repassword) {
      showMessage({
        description: 'Etliekmekcim',
        message: 'Girilen parolalar uyumlu değil',
        type: 'danger',
      });
      return;
    }

    try {
      const response = await auth()
        .createUserWithEmailAndPassword(formValues.email, formValues.password)
        .then(res => {
          return firestore().collection('users').doc(res.user.uid).set({
            username: formValues.username,
            email: formValues.email,
            phone_number: formValues.phone_number,
            address: formValues.address,
          });
        });
      await response.user.updateProfile({displayName: formValues.username});
      navigation.navigate('LoginPage');
    } catch (error) {
      console.log(error);
      showMessage({
        description: 'Etliekmekcim',
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    }
  };

  return (
    <ScrollView>
      <AppView>
        <ScrollView>
          <View style={styles.title_container}>
            <AppText style={styles.title}>Kaydolun</AppText>
          </View>
          <Formik
            initialValues={initialFormValues}
            onSubmit={handleFormSubmit}
            validationSchema={validationSchema}>
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldTouched,
            }) => (
              <>
                <View style={styles.input_container}>
                  <AppInput
                    icon="account"
                    width="75%"
                    placeholder="Kullanıcı adı giriniz.."
                    value={values.username}
                    onChangeText={handleChange('username')}
                    onBlur={() => setFieldTouched('username')}
                  />
                  {touched.username && (
                    <ErrorMessage
                      error={errors.username}
                      visible={touched.username}
                    />
                  )}
                  <AppInput
                    icon="email"
                    width="75%"
                    placeholder="E-posta adresinizi giriniz.."
                    value={values.email}
                    onChangeText={handleChange('email')}
                    keyboardType="email-address"
                    onBlur={() => setFieldTouched('email')}
                    autoCapitalize="none"
                  />
                  {touched.email && (
                    <ErrorMessage
                      error={errors.email}
                      visible={touched.email}
                    />
                  )}
                  <AppInput
                    icon="cellphone"
                    width="75%"
                    placeholder="Telefon numaranızı giriniz.."
                    value={values.phone_number}
                    onChangeText={handleChange('phone_number')}
                    keyboardType="phone-pad"
                    onBlur={() => setFieldTouched('phone_number')}
                    maxLength={11}
                  />
                  {touched.phone_number && (
                    <ErrorMessage
                      error={errors.phone_number}
                      visible={touched.phone_number}
                    />
                  )}
                  <AppInput
                    icon="map-marker"
                    width="75%"
                    placeholder="Adresinizi giriniz.."
                    value={values.address}
                    onChangeText={handleChange('address')}
                    onBlur={() => setFieldTouched('address')}
                    multiline
                  />
                  {touched.address && (
                    <ErrorMessage
                      error={errors.address}
                      visible={touched.address}
                    />
                  )}
                  <AppInput
                    icon="lock"
                    width="75%"
                    placeholder="Parolanızı giriniz..       "
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    secureTextEntry
                  />
                  {touched.password && (
                    <ErrorMessage
                      error={errors.password}
                      visible={touched.password}
                    />
                  )}
                  <AppInput
                    icon="lock-check"
                    width="75%"
                    placeholder="Parolanızı tekrar giriniz.."
                    value={values.repassword}
                    onChangeText={handleChange('repassword')}
                    onBlur={() => setFieldTouched('repassword')}
                    secureTextEntry
                  />
                  {touched.repassword && (
                    <ErrorMessage
                      error={errors.repassword}
                      visible={touched.repassword}
                    />
                  )}
                </View>
                <View style={styles.button_container}>
                  <AppButton title="Kayıt Ol" onPress={handleSubmit} />
                </View>
              </>
            )}
          </Formik>
          <View style={styles.inner_button_container}>
            <AppText style={styles.signUp1}> Hesabınız zaten var mı?</AppText>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('LoginPage')}>
              <AppText style={styles.signUp2}> Giriş Yapın </AppText>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </AppView>
    </ScrollView>
  );
}

export default RegisterPage;
