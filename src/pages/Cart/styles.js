import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: #fff;
  margin: 25px;
  padding: 10px;
  border-radius: 4px;
`;

export const Product = styled.View``;

export const ProductItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-right: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;

export const ProductSubTotal = styled.View`
  background: #eee;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin: 0 5px;
  height: 30px;
  padding: 0 5px;
  background: #fff;
  width: 50px;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
`;

export const ProductSubTotalPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;

export const ProductTotal = styled.View`
  margin-top: 20px;
`;

export const ProductTotalText = styled.Text`
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: #999;
`;

export const ProductTotalPrice = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const ProductTotalButton = styled.TouchableOpacity`
  background: ${colors.primary};
  padding: 10px;
  border-radius: 4px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
`;

export const EmptyCart = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 21px;
  margin-top: 20px;
`;
