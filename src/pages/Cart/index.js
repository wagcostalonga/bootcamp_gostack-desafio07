import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  Product,
  ProductItem,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductSubTotal,
  ProductAmount,
  ProductSubTotalPrice,
  ProductInput,
  ProductTotal,
  ProductTotalText,
  ProductTotalPrice,
  ProductTotalButton,
  ButtonText,
  EmptyCart,
} from './styles';

export default function Cart() {
  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        {cart.length ? (
          <>
            {cart.map((product) => (
              <Product key={product.id}>
                <ProductItem>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.priceFormatted}</ProductPrice>
                  </ProductDetails>
                  <TouchableOpacity
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <Icon name="delete" color="#7159c1" size={20} />
                  </TouchableOpacity>
                </ProductItem>

                <ProductSubTotal>
                  <ProductAmount>
                    <TouchableOpacity onPress={() => decrement(product)}>
                      <Icon
                        name="remove-circle-outline"
                        color="#7159c1"
                        size={20}
                      />
                    </TouchableOpacity>
                    <ProductInput
                      keyboardType="numeric"
                      editable={false}
                      value={String(product.amount)}
                    />
                    <TouchableOpacity onPress={() => increment(product)}>
                      <Icon
                        name="add-circle-outline"
                        color="#7159c1"
                        size={20}
                      />
                    </TouchableOpacity>
                  </ProductAmount>
                  <ProductSubTotalPrice>
                    {product.subtotal}
                  </ProductSubTotalPrice>
                </ProductSubTotal>
              </Product>
            ))}
            <ProductTotal>
              <ProductTotalText>Total</ProductTotalText>
              <ProductTotalPrice>{total}</ProductTotalPrice>
              <ProductTotalButton>
                <ButtonText>Finalizar Pedido</ButtonText>
              </ProductTotalButton>
            </ProductTotal>
          </>
        ) : (
          <>
            <Icon
              name="remove-shopping-cart"
              size={80}
              color="#e5e5e5"
              style={{ textAlign: 'center' }}
            />
            <EmptyCart>Seu carrinho está vazio!</EmptyCart>
          </>
        )}
      </Container>
    </ScrollView>
  );
}
