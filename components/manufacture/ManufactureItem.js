// react
import React from 'react';

// mobx
import { observer } from 'mobx-react';

// react-native
import { Image, Text, View } from 'react-native';

// main function
const ManufactureItem = ({ manufacture }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>{manufacture.name}</Text>
      <Image
        source={{ uri: manufacture.img }}
        style={{ height: '100%', width: '100%', flex: 1 }}
      />
    </View>
  );
};

export default observer(ManufactureItem);
