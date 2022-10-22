import React from 'react';
import LottieView from 'lottie-react-native';

function Completed() {
  return <LottieView source={require('../completed.json')} autoPlay/>;
}

export default Completed;
