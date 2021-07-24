// react
import React from 'react';

// mobix
import { observer } from 'mobx-react';

// Components
import KayakItem from './KayakItem';

// stores
import kayakStore from '../../stores/kayakStore';

// native-base
import { List, Spinner } from 'native-base';

// styles
import { ListWrapper } from './styles';

const KayakList = ({ kayaks }) => {
  if (kayakStore.loading) return <Spinner />;

  const kayakList = kayakStore.kayaks.map((kayak) => {
    return <KayakItem key={kayak.id} kayak={kayak} />;
  });

  return (
    <ListWrapper>
      <List>{kayakList}</List>
    </ListWrapper>
  );
};

export default observer(KayakList);
