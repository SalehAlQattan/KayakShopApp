// react
import React from 'react';

// stack
const Stack = createStackNavigator();

// react-navigation
import { createStackNavigator } from '@react-navigation/stack';

// components
import ManufactureList from '../manufacture/ManufactureList';
import ManufactureDetails from '../manufacture/ManufactureDetails';
import Home from '../Home';

export default RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#222',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ManufactureList"
        component={ManufactureList}
        options={{ title: 'Choose Manufacture' }}
      />
      <Stack.Screen
        name="ManufactureDetails"
        component={ManufactureDetails}
        options={({ route }) => {
          const { manufacture } = route.params;
          return {
            title: manufacture.name,
          };
        }}
      />
    </Stack.Navigator>
  );
};
