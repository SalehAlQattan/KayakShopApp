// react
import React from 'react';

// mobix
import { observer } from 'mobx-react';

// Components
import ManufactureItem from './ManufactureItem';

// stores
import manufactureStore from '../../stores/manufactureStore';

// native-base
import { List, Spinner } from 'native-base';

// styles
import { ListWrapper } from './styles';

const ManufactureList = () => {
  if (manufactureStore.loading) return <Spinner />;
  const manufactureList = manufactureStore.manufactures.map((manufacture) => {
    return <ManufactureItem key={manufacture.id} manufacture={manufacture} />;
  });

  return (
    <ListWrapper>
      <List>{manufactureList}</List>
    </ListWrapper>
  );
};

export default observer(ManufactureList);
