import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';

import colors from './styles/colors';

export default function Routes() {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          header: (nav) => <Header {...nav} />,
          cardStyle: { backgroundColor: colors.dark },
        }}
      >
        <Screen name="Main" component={Main} />
        <Screen name="Cart" component={Cart} />
      </Navigator>
    </NavigationContainer>
  );
}
