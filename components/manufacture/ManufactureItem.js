// react
import React from 'react';

// mobx
import { observer } from 'mobx-react';

// react-native
import { Image, Text } from 'react-native';

// native-base
import { List } from 'native-base';

// styles
import { ManufactureItemStyled } from './styles';

// main function
const ManufactureItem = ({ manufacture, navigation }) => {
  return (
    <List.Item
      onPress={() =>
        navigation.navigate('ManufactureDetails', { manufacture: manufacture })
      }
    >
      <Image
        source={{ uri: manufacture.img }}
        style={{ height: 100, width: 100 }}
      />
      <ManufactureItemStyled>{manufacture.name}</ManufactureItemStyled>
    </List.Item>
  );
};

export default observer(ManufactureItem);
