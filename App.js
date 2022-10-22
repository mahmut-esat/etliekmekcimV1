import React from 'react';
import {Provider} from 'react-redux';
import FlashMessage from "react-native-flash-message";

import {store} from './src/redux/store';
import Router from './src/Router';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
      <FlashMessage position="top" duration={3000} statusBarHeight={30} />
    </Provider>
  );
}
