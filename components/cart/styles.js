// styled components
import styled from 'styled-components/native';

// icons
import { FontAwesome } from '@expo/vector-icons';

export const CartButtonStyled = styled(FontAwesome)`
  color: ${({ theme }) => theme.mainColor};
  font-size: 15px;
  font-weight: bold;
  margin-right: 10px;
`;

export const TrashIcon = styled(FontAwesome)`
  color: ${({ theme }) => theme.red};
`;

export const CheckoutButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.backgroundColor};
  padding: 10px;
`;

export const CheckoutButtonText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;
