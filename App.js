/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import LowerNavBar from './components/LowerNavBar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  return (
    <NavigationContainer>
      <LowerNavBar />
    </NavigationContainer>
  );
};

export default App;
