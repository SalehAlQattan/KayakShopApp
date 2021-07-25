// react
import React from 'react';

// native-base
import { List, Spinner } from 'native-base';

// stores
import cartStore from '../../stores/cartStore';
import kayakStore from '../../stores/kayakStore';

// components
import CartItem from './CartItem';

// mobx
import { observer } from 'mobx-react';

const CartList = () => {
  if (kayakStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...kayakStore.getKayakById(item.kayakId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);

  return <List>{cartList}</List>;
};

export default observer(CartList);
