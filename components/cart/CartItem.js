// react
import React from 'react';

// react-native
import { Text } from 'react-native';

// native-base
import { List } from 'native-base';

const CartItem = ({ item }) => {
  return (
    <List.Item>
      <Text>{item.name} </Text>
      <Text>
        {item.price} KD X {item.quantity}
      </Text>
      <Text> = {item.price * item.quantity} KD</Text>
    </List.Item>
  );
};

export default CartItem;
