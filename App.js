import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import store from './src/store';
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="#141419" />
        <Routes />
      </Provider>
    </>
  );
}
