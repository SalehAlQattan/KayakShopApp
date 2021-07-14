// react
import React from 'react';

// react-native
import { ImageBackground, View } from 'react-native';

// styles
import { HomeBackground } from '../styles';

const Home = () => {
  return (
    <HomeBackground
      source={{
        uri: 'http://cdn.shopify.com/s/files/1/0550/6347/8477/products/grg9ymuoflgl1lkkc5h5.jpg?v=1619732530',
      }}
    />
  );
};

export default Home;
