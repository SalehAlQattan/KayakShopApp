// react
import React from 'react';
// mobix
import { observer } from 'mobx-react';
// Components
import KayakItem from './KayakItem';
// stores
import kayakStore from '../../stores/kayakStore';
// react-native
import { View } from 'react-native';

const ManufactureList = () => {
  const kayakList = kayakStore.kayaks.map((kayaks) => {
    return <KayakItem key={kayaks.id} kayaks={kayaks} />;
  });

  return <View>{kayakList}</View>;
};

export default observer(ManufactureList);
