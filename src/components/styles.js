import styled from 'styled-components/native';
import colors from '../styles/colors';

import logo from '../assets/logo.png';

export const Navbar = styled.View`
  margin: 25px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  width: 16px;
  height: 16px;
  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  text-align: center;
  border-radius: 9px;
  margin-top: -4px;
  margin-left: 15px;
  overflow: hidden;
`;
