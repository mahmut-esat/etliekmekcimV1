import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import Tabs from './navigator/Tabs';
import {calculateTotals} from './redux/cart/cartSlice';

export default function Router() {
  const {items} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [items]);

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
