import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Formik} from 'formik';
import * as Yup from 'yup';

import ErrorMessage from '../../utils/ErrorMessage';

import AppButton from '../../components/basic/AppButton/AppButton';
import AppInput from '../../components/basic/AppInput/AppInput';
import AppText from '../../components/basic/AppText/AppText';
import AppView from '../../components/basic/AppView/AppView';
import styles from './AccountEditPage.styles';
import {COLORS} from '../../constants/theme';

export default function AccountEditPage() {
  const navigation = useNavigation();

  const initialFormValues = {
    username: '',
    phone_number: '',
    address: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Lütfen bu alanı doldurunuz!')
      .label('Username'),
    phone_number: Yup.number()
      .required('Lütfen bu alanı doldurunuz!')
      .label('PhoneNumber'),
    address: Yup.string()
      .required('Lütfen bu alanı doldurunuz!')
      .label('Address'),
  });

  const handleSave = async formValues => {
    const user = auth().currentUser;

    try {
      await firestore().collection('users').doc(user.uid).set({
        username: formValues.username,
        address: formValues.address,
        phone_number: formValues.phone_number,
        email: user.email,
      });
    } catch (error) {
      console.log(error);
    }

    navigation.navigate('AccountPage');
  };

  return (
    <AppView style={styles.container}>
      <ScrollView>
        <AppText style={styles.title}>Kişisel Bilgilerim</AppText>

        <Formik
          initialValues={initialFormValues}
          onSubmit={handleSave}
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
                  width={Dimensions.get('window').width * 0.8}
                  placeholder="Kullanıcı adı giriniz.."
                  value={values.username}
                  onChangeText={handleChange('username')}
                  onBlur={() => setFieldTouched('username')}
                  newStyle={{flex: 1}}
                />
                {touched.username && (
                  <ErrorMessage
                    error={errors.username}
                    visible={touched.username}
                  />
                )}
                <AppInput
                  icon="cellphone"
                  width={Dimensions.get('window').width * 0.8}
                  placeholder="Telefon numaranızı giriniz.."
                  value={values.phone_number}
                  onChangeText={handleChange('phone_number')}
                  keyboardType="phone-pad"
                  onBlur={() => setFieldTouched('phone_number')}
                  maxLength={11}
                  newStyle={{flex: 1}}
                />
                {touched.phone_number && (
                  <ErrorMessage
                    error={errors.phone_number}
                    visible={touched.phone_number}
                  />
                )}
                <AppInput
                  icon="map-marker"
                  width={Dimensions.get('window').width * 0.8}
                  placeholder="Adresinizi giriniz.."
                  value={values.address}
                  onChangeText={handleChange('address')}
                  onBlur={() => setFieldTouched('address')}
                  multiline
                  newStyle={{flex: 1}}
                />
                {touched.address && (
                  <ErrorMessage
                    error={errors.address}
                    visible={touched.address}
                  />
                )}
              </View>
              <View style={styles.button_container}>
                <AppButton title="Kaydet" onPress={handleSubmit}></AppButton>
                <AppButton
                  title="İptal"
                  onPress={() => navigation.goBack()}
                  newButtonStyle={{backgroundColor: COLORS.white, color: 'red'}}
                  newTextStyle={{color: COLORS.mainColor}}></AppButton>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </AppView>
  );
}
