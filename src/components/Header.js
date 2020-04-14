import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Navbar, Logo, ItemCount } from './styles';

export default function Header() {
  const navigation = useNavigation();
  function navigateToCart() {
    navigation.navigate('Cart');
  }
  function navigateToMain() {
    navigation.navigate('Main');
  }

  const cartSize = useSelector((state) => state.cart.length);
  return (
    <Navbar>
      <TouchableOpacity onPress={navigateToMain}>
        <Logo />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToCart}>
        <Icon name="shopping-basket" color="#fff" size={24} />
        <ItemCount>{cartSize}</ItemCount>
      </TouchableOpacity>
    </Navbar>
  );
}
