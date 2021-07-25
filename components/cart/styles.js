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
