import React from 'react';
import LottieView from 'lottie-react-native';

function OnWay() {
  return <LottieView source={require('../delivery.json')} autoPlay/>;
}

export default OnWay;