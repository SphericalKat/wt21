/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './components/BottomTabNav';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </>
  );
};

export default App;
