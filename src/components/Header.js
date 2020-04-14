import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Navbar, Logo, ItemCount } from './styles';

function Header({ cartSize }) {
  const navigation = useNavigation();
  function navigateToCart() {
    navigation.navigate('Cart');
  }
  function navigateToMain() {
    navigation.navigate('Main');
  }

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

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
