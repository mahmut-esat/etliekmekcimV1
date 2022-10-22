import React from 'react';
import LottieView from 'lottie-react-native';

function Loading() {
  return (
    <LottieView
      source={require('../loading.json')}
      autoPlay
      style={{
        width: '100%',
        justifyContent:"center",
        alignItems:"center",
        marginVertical:100
      }}
    />
  );
}

export default Loading;
