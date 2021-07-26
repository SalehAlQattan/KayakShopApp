// react
import React, { useState } from 'react';

// react-native
import { Image, Text } from 'react-native';

// native-base
import { List, Button } from 'native-base';

// library
import NumericInput from 'react-native-numeric-input';

// stores
import cartStore from '../../stores/cartStore';

// main function
const KayakItem = ({ kayak }) => {
  // quantity state
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { kayakId: kayak.id, quantity };
    cartStore.addToCart(newItem);
  };

  return (
    <List.Item>
      <Image source={{ uri: kayak.img }} style={{ width: 100, height: 100 }} />
      <Text>{kayak.name}</Text>
      <NumericInput
        rounded
        minValue={1}
        initValue={quantity}
        onChange={setQuantity}
        totalWidth={80}
        totalHeight={40}
      />
      <Button onPress={handleAdd}>
        <Text>Add</Text>
      </Button>
    </List.Item>
  );
};

export default KayakItem;
