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

// styles
import { CheckoutButton, CheckoutButtonText } from './styles';

const CartList = () => {
  if (kayakStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...kayakStore.getKayakById(item.kayakId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);

  return (
    <>
      <List>{cartList}</List>
      <CheckoutButton onPress={cartStore.checkout}>
        <CheckoutButtonText>checkout</CheckoutButtonText>
      </CheckoutButton>
    </>
  );
};

export default observer(CartList);
