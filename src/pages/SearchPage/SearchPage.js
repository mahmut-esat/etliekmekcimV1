import {ScrollView, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Header from '../../components/Header/Header';
import firestore from '@react-native-firebase/firestore';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './SearchPage.styles';

export default function SearchPage() {
  const [yemekData, setYemekData] = useState([]);
  const [searchText, setSearchText] = useState('');

  async function dataGetir() {
    try {
      let list = [];
      const newData = await firestore()
        .collection('yemek_data')
        .orderBy('order', 'asc')
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            list.push(doc.data());
          });
        });
      setYemekData(list);
      setLoading(false);
      console.log(list);
    } catch (error) {
      console.log('Error: ' + error);
    }
  }

  useEffect(() => {
    dataGetir();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar onSearch={text => setSearchText(text)} />
      <ScrollView horizontal style={styles.products_container}>
        {yemekData
          .filter(val => {
            if (searchText == '') {
              return null;
            } else if (
              val.title.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
      </ScrollView>
    </View>
  );
}
