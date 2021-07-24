import { StatusBar } from 'expo-status-bar';

// react
import React from 'react';

// react-navtive
import { StyleSheet, View } from 'react-native';

// native-base
import { NativeBaseProvider } from 'native-base';

// styles
import { ThemeProvider } from 'styled-components';

// components
import ManufactureList from './components/manufacture/ManufactureList';
import ManufactureDetails from './components/manufacture/ManufactureDetails';
import KayakList from './components/kayak/KayakList';
import Home from './components/Home';

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
        <View style={styles.container}>
          {/* <ManufactureList /> */}
          {/* <ManufactureDetails /> */}
          {/* <KayakList /> */}
          <Home />
        </View>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
