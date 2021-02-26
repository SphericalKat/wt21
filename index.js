/**
 * @format
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';

export default function Main() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <App />
      </PaperProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);
