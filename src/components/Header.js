import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Navbar, Logo, ItemCount } from './styles';

export default function Header() {
  const navigation = useNavigation();
  function navigateToCart(cart) {
    navigation.navigate('Cart', { cart });
  }

  return (
    <Navbar>
      <Logo />
      <TouchableOpacity onPress={() => navigateToCart(cart)}>
        <Icon name="shopping-basket" color="#fff" size={24} />
        <ItemCount>03</ItemCount>
      </TouchableOpacity>
    </Navbar>
  );
}
