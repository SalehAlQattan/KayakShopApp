// react
import React from 'react';

// styles
import { CartButtonStyled } from '../styles';

// navigation
import { useNavigation } from '@react-navigation/native';

// mobx
import { observer } from 'mobx-react';

// native-base
import { Button } from 'native-base';

// react-nativ
import { Text, Alert } from 'react-native';

// stores
import cartStore from '../../../stores/cartStore';
import authtStore from '../../../stores/authStore';

const CartButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (authtStore.user) {
      navigation.navigate('CartList');
    } else {
      Alert.alert(
        'Signin',
        'Please Signin Before Checkout',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          { text: 'Signin', onPress: () => navigation.navigate('Signin') },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <Button
      style={{ height: 40, width: 60, marginRight: 5 }}
      onPress={handlePress}
    >
      <CartButtonStyled name="shopping-cart" size={24} />
      <Text>{cartStore.totalQuantity}</Text>
    </Button>
  );
};

export default observer(CartButton);
