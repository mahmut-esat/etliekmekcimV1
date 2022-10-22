import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import UserPage from '../pages/UserPage/UserPage';
import AccountPage from '../pages/AccountPage/AccountPage';
import AccountEditPage from '../pages/AccountEditPage/AccountEditPage';
import AdminPage from '../pages/AdminPage/AdminPage';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!userSession ? (
        <>
          <Stack.Screen
            name="UserPage"
            component={UserPage}
            options={{headerShown: false}}
          />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} />
        </>
      ) : (
        <>
          <Stack.Screen name="AccountPage" component={AccountPage} />
          <Stack.Screen name="AccountEditPage" component={AccountEditPage} />
          <Stack.Screen name="AdminPage" component={AdminPage} />
        </>
      )}
    </Stack.Navigator>
  );
};
export default AuthNavigator;
