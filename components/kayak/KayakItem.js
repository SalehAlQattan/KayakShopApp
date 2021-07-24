// react
import React from 'react';

// mobx
import { observer } from 'mobx-react';

// react-native
import { Image, Text, View } from 'react-native';

// native-base
import { List } from 'native-base';

// main function
const KayakItem = ({ kayak }) => {
  return (
    <List.Item>
      <Image source={{ uri: kayak.img }} style={{ width: 100, height: 100 }} />
      <Text>{kayak.name}</Text>
    </List.Item>
  );
};

export default observer(KayakItem);
