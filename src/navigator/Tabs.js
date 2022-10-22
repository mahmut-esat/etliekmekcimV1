import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';

import CartPage from '../pages/CartPage/CartPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import HomePageStack from './HomePageStack';
import AuthNavigator from './AuthNavigator';
import { COLORS } from '../constants/theme';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const dispatch = useDispatch();

  const {quantity} = useSelector(state => state.cart);
  const items = useSelector(state => state.cart);

  const CustomTabBarButton = ({children, onPress}) => {
    return (
      <View>
        <View
          style={{
            backgroundColor: COLORS.mainColor,
            width: 30,
            height: 30,
            zIndex: 999,
            position: 'absolute',
            top: -3,
            right: -17,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            borderWidth: 0.5,
            borderColor: COLORS.grey,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontWeight: '700',
            }}>
            {quantity}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={onPress}
          style={{
            justifyContent: 'center',
            alignItems: 'center',

            width: 50,
            height: 50,
            borderRadius: 35,
            backgroundColor: COLORS.mainColor,
            //flex: 1,
          }}>
          {children}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // headerları kapat
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false, // tab bar icon'ların isimlerini göster/gösterme
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 0,
          left: 5,
          right: 5,
          backgroundColor: COLORS.white,
          elevation: 0,
          borderTopStartRadius: 10,
          borderTopRightRadius: 10,
          borderColor: COLORS.grey,
          borderWidth: 2,
          borderBottomWidth: 0,
          borderTopColor: COLORS.grey,
          borderTopWidth: 2,
          zIndex:999,
          shadowColor: COLORS.dark,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.5,
          elevation: 2,
        },
        tabBarActiveTintColor: COLORS.mainColor,
        tabBarInactiveTintColor: '#bdbdbd',
      }}
      initialRouteName="AnaSayfa" // başlangıç sayfası
    >
      <Tab.Screen
        name="AnaSayfa"
        component={HomePageStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="magnify" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sepet"
        component={CartPage}
        options={{
          tabBarIcon: () => <Icon name="cart" color={'white'} size={32} />,
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Hesabım"
        component={AuthNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="account" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Hakkmızda"
        component={AboutPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="information" color={color} size={32} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
