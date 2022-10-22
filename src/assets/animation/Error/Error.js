import React from "react";
import LottieView from 'lottie-react-native';

function Error() {
  return <LottieView source={require("../error.json")} autoPlay />;
}

export default Error;