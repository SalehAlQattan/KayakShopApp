// react
import React from 'react';

// react-native
import { Text } from 'react-native';

// native-base
import { List } from 'native-base';

// styles
import { TrashIcon } from './styles';

// stores
import cartStore from '../../stores/cartStore';

const CartItem = ({ item }) => {
  return (
    <List.Item>
      <Text>{item.name} </Text>
      <Text>
        {item.price} KD X {item.quantity}
      </Text>
      <Text> = {item.price * item.quantity} KD</Text>
      <TrashIcon
        name="trash-o"
        size={24}
        onPress={() => cartStore.deleteFromCart(item.id)}
      />
    </List.Item>
  );
};

export default CartItem;
