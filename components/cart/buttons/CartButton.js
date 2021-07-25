// react
import React from 'react';

// styles
import { CartButtonStyled } from '../styles';

// navigation
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

const CartButton = () => {
  const navigation = useNavigation();

  return (
    <CartButtonStyled
      name="shopping-cart"
      size={24}
      onPress={() => navigation.navigate('CartList')}
    />
  );
};

export default CartButton;
