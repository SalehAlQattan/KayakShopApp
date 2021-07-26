// react
import React from 'react';

// styles
import { CartButtonStyled } from '../styles';

// navigation
import { useNavigation } from '@react-navigation/native';

// mobx
import { observer } from 'mobx-react';

// native-base
import { Button } from 'native-base';

// react-nativ
import { Text } from 'react-native';

// stores
import cartStore from '../../../stores/cartStore';

const CartButton = () => {
  const navigation = useNavigation();

  return (
    <Button onPress={() => navigation.navigate('CartList')}>
      <CartButtonStyled name="shopping-cart" size={24} />
      <Text>{cartStore.totalQuantity}</Text>
    </Button>
  );
};

export default observer(CartButton);
