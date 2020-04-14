import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: 4px;
  margin-top: auto;
  align-items: center;
  flex-direction: row;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  flex: 1;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
`;
