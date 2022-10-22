import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePage from '../pages/HomePage/HomePage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import YourOrderPage from '../pages/YourOrderPage/YourOrderPage';
import {colors} from '../styles/colors';
import AuthNavigator from './AuthNavigator';
import UserPage from '../pages/UserPage/UserPage';

export default function HomePageStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen
          name="UserPage"
          component={UserPage}
          headerShown={false}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: 'true',
          screenTop: 50,
        }}>
        <Stack.Screen
          name="DetailPage"
          component={ProductDetailPage}
          options={{
            title: 'Menü',
            headerTintColor: colors.mainColor,
            animation: 'slide_from_right',
            animationDuration: 0.1,
            headerShown: true,
            orientation: 'portrait',
            headerTransparent: false,
          }}
        />
        <Stack.Screen
          name="YourOrderPage"
          component={YourOrderPage}
          options={{
            title: 'Menü',
            headerTintColor: colors.mainColor,
            animation: 'slide_from_bottom',
            animationDuration: 2,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
