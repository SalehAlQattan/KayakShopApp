// react
import React from 'react';

// mobx
import { observer } from 'mobx-react';

// react-native
import { Image, Text, View } from 'react-native';

// main function
const KayakItem = ({ kayaks }) => {
  return (
    <View>
      <Text>{kayaks.name}</Text>
      <Image
        source={{ uri: kayaks.img }}
        style={{ height: '100%', width: '100%' }}
      />
    </View>
  );
};

export default observer(KayakItem);
