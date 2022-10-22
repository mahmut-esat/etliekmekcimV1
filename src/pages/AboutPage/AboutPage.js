import React from 'react';
import {Text, View, Linking, TouchableOpacity, Image} from 'react-native';
import Call from '../../assets/animation/Call/Call';
import Map from '../../assets/animation/Map/Map';
import AppText from '../../components/basic/AppText/AppText';
import styles from './AboutPage.styles';
import AppView from '../../components/basic/AppView/AppView';

const locationURL = 'https://goo.gl/maps/fFwqX47crck3pBuC9';

function AboutPage() {
  return (
    <AppView style={{flex: 1}}>
      <View style={styles.title_container}>
        <AppText style={styles.title}>Hakkımızda</AppText>
      </View>
      <View style={styles.profile}>
        <AppText style={styles.contact}>
          Etliekmekcim 2019 yılından itibaren Konya'mızın fırın lezzetleri ile,
          kaliteden ödün vermeden sizleri ağırlamaktan mutluluk duymaktadır.
        </AppText>
      </View>
      <View style={styles.profile}>
        <AppText style={styles.profil_title}>İletişim</AppText>

        <TouchableOpacity
          style={styles.contact_area}
          onPress={() => Linking.openURL(locationURL)}>
          <View style={styles.anime}>
            <Map />
          </View>
          <View style={styles.call_container}>
            <Text style={styles.contact_title}>Adres</Text>
            <Text style={styles.contact}>
              Yenişehir Mahallesi Meram / Konya
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contact_area}
          onPress={() => Linking.openURL(`tel:+90(555)-000-4242`)}>
          <View style={styles.anime}>
            <Call />
          </View>
          <View style={styles.call_container}>
            <Text style={styles.contact_title}>Telefon</Text>
            <Text style={styles.contact}>0555 000 42 42</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.logo_container}>
        <Image
          source={require('../../assets/image/Logo.jpg')}
          style={styles.logo}
        />
      </View>
    </AppView>
  );
}

export default AboutPage;
