// react-navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './components/Navigation/index';

// react
import React from 'react';

// native-base
import { NativeBaseProvider } from 'native-base';

// styles
import { ThemeProvider } from 'styled-components';

// theme
const theme = {
  mainColor: '#dbe6fd',
  backgroundColor: '#293b5f',
  red: 'red',
};

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
