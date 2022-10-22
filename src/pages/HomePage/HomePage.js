import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './HomePage.styles';
import Header from '../../components/Header/Header';
import HomeContents from '../../components/HomeContents/HomeContents';

export default function HomePage() {

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <HomeContents />
      </ScrollView>
    </View>
  );
}
