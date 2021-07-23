import { StatusBar } from 'expo-status-bar';

// react
import React from 'react';

// react-navtive
import { StyleSheet, Text, View } from 'react-native';

// styles
import { ThemeProvider } from 'styled-components';

// components
import ManufactureList from './components/manufacture/ManufactureList';
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
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <ManufactureList /> */}
        {/* <KayakList /> */}
        <Home />
      </View>
    </ThemeProvider>
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
