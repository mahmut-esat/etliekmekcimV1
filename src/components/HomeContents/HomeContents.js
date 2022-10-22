import {ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import styles from './HomeContents.styles';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../../assets/animation/Loading/Loading';

export default function HomeContents() {
  const [yemekData, setYemekData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    } catch (error) {
      console.log('Error: ' + error);
    }
  }

  useEffect(() => {
    dataGetir();
  }, []);

  const firin = yemekData.filter(item => item.category === 'FirinLezzetleri');
  const tatli = yemekData.filter(item => item.category === 'Tatli');
  const icecek = yemekData.filter(item => item.category === 'icecek');

  return (
    <View>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ScrollView style={styles.container}>
            <View style={styles.card_container}>
              <CategoryTitle title="Fırın Lezzetleri" />
              <ScrollView horizontal>
                {firin.map((item, index) => (
                  <ProductCard key={index} item={item} />
                ))}
              </ScrollView>
            </View>
            <View style={styles.card_container}>
              <CategoryTitle title="Tatlı" />
              <ScrollView horizontal>
                {tatli.map(item => (
                  <ProductCard key={item.order} item={item} />
                ))}
              </ScrollView>
            </View>
            <View style={styles.card_container}>
              <CategoryTitle title="İçecek" />
              <ScrollView horizontal>
                {icecek.map(item => (
                  <ProductCard key={item.order} item={item} />
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
}

const CategoryCard = ({title}) => {
  return (
    <View>
      <View style={styles.title_container}>
        <Text style={styles.title_text}>{title}</Text>
      </View>
    </View>
  );
};

const CategoryTitle = ({title}) => (
  <View style={styles.title_container}>
    <Text style={styles.title_text}>{title}</Text>
  </View>
);
