import React from 'react';
import LottieView from 'lottie-react-native';

function ShoppingBag() {
  return <LottieView source={require('../shopping-bag.json')} autoPlay/>;
}

export default ShoppingBag;