import React from 'react';
import LottieView from 'lottie-react-native';

function Call() {
  return <LottieView source={require('../location.json')} autoPlay/>;
}

export default Call;
