import styled from 'styled-components/native';

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const OverLayContainter = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TopStyling = styled.View`
  height: 50%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const BottomStyling = styled.View`
  height: 50%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyling = styled.Text`
  color: ${({ theme }) => theme.mainColor};
  font-size: 22px;
`;
