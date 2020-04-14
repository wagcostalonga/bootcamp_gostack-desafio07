import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
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

export default function Main() {
  const [products, setProducts] = useState([]);
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <SafeAreaView>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={(product) => String(product.id)}
        renderItem={({ item: product }) => (
          <Product key={product.id}>
            <ProductImage source={{ uri: product.image }} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.priceFormatted}</ProductPrice>
            <AddButton onPress={() => handleAddProduct(product.id)}>
              <ProductAmount>
                <Icon name="add-shopping-cart" color="#fff" size={20} />
                <ProductAmountText>{amount[product.id] || 0}</ProductAmountText>
              </ProductAmount>
              <ButtonText>Adicionar</ButtonText>
            </AddButton>
          </Product>
        )}
      />
    </SafeAreaView>
  );
}
