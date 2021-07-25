// react
import React from 'react';

// styles
import {
  HomeBackground,
  OverLayContainter,
  ButtonStyling,
  BottomStyling,
  TopStyling,
  Title,
} from '../styles';

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri: 'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/qytivbeitswj1772f73squhyd59s_shutterstock_1851576601.jpg',
      }}
    >
      <OverLayContainter>
        <TopStyling>
          <Title>Buy Your Kayak Now</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyling onPress={() => navigation.navigate('ManufactureList')}>
            Click here to skip
          </ButtonStyling>
        </BottomStyling>
      </OverLayContainter>
    </HomeBackground>
  );
};

export default Home;
