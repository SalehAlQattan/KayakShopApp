// react
import React from 'react';
// mobix
import { observer } from 'mobx-react';
// Components
import ManufactureItem from './ManufactureItem';
// stores
import manufactureStore from '../../stores/manufactureStore';
// react-native
import { View } from 'react-native';

const ManufactureList = () => {
  const manufactureList = manufactureStore.manufactures.map((manufacture) => {
    return <ManufactureItem key={manufacture.id} manufacture={manufacture} />;
  });

  return <View>{manufactureList}</View>;
};

export default observer(ManufactureList);
