import styled from 'styled-components/native';

export const ListWrapper = styled.View`
  margin-top: 10%;
  width: 100%;
`;

export const ManufactureItemStyled = styled.Text`
  color: ${({ theme }) => theme.backgroundColor};
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const ManufactureDetailWrapper = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const ManufactureDetailImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ManufactureDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40px;
`;
