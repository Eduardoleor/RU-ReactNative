import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import generateStore from '../../redux/store';
import Users from './Users';

function Home() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}

export default Home;
