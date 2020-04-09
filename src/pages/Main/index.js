import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import {
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  ButtonText,
} from './styles';

export default class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { data } = await api.get('/products');
    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <SafeAreaView>
        <FlatList
          horizontal
          data={products}
          keyExtractor={(product) => String(product.id)}
          renderItem={({ item: product }) => (
            <Product>
              <ProductImage source={product.image} />
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
              <AddButton onPress={() => {}}>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#fff" size={20} />
                  <ProductAmountText>3</ProductAmountText>
                </ProductAmount>
                <ButtonText>Adicionar</ButtonText>
              </AddButton>
            </Product>
          )}
        />
      </SafeAreaView>
    );
  }
}
