// react
import React from 'react';

// react-native
import { View, Text, Image } from 'react-native';

// native-base
import { Spinner } from 'native-base';

// mobx
import { observer } from 'mobx-react';

// stores
import manufactureStore from '../../stores/manufactureStore';
import kayakStore from '../../stores/kayakStore';

// components
import KayakList from '../kayak/KayakList';

// styles
import {
  ManufactureDetailImage,
  ManufactureDetailWrapper,
  ManufactureDetailTitle,
} from './styles';

const ManufactureDetails = () => {
  if (manufactureStore.loading) return <Spinner />;

  const manufacture = manufactureStore.manufactures[1];

  const kayaks = manufacture.kayaks.map((kayak) =>
    kayakStore.getKayakById(kayak.id)
  );

  return (
    <>
      <ManufactureDetailWrapper>
        <ManufactureDetailImage source={{ uri: manufacture.img }} />
        <ManufactureDetailTitle>{manufacture.name}</ManufactureDetailTitle>
      </ManufactureDetailWrapper>
      <KayakList kayaks={kayaks} />
    </>
  );
};

export default observer(ManufactureDetails);
